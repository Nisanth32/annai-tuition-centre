import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  UserPlus,
  Trash2,
  LogOut,
  Lock,
  Users,
  BarChart3,
  Eye,
  EyeOff,
  CheckCheck,
} from 'lucide-react';
import './attendance.css';

const ALLOWED_USER_ID = 'S. Thiyagarajan';
const ALLOWED_PASSWORD = 'S. Thiyagarajan123@$#';

const DEFAULT_FACULTY = [
  { id: 1, name: 'Kishore V' },
  { id: 2, name: 'Prasanna Venkatesh' },
  { id: 3, name: 'Pooja' },
  { id: 4, name: 'Subiksha' },
  { id: 5, name: 'Kowsalya' },
];

const LS_FACULTY_KEY = 'atc_attendance_faculty_v1';
const LS_RECORDS_KEY = 'atc_attendance_records_v1';
const SS_AUTH_KEY = 'atc_attendance_auth_v1';

const todayStr = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const monthStr = (dateStr) => (dateStr || todayStr()).slice(0, 7);

function getWeekRange(dateStr) {
  const base = new Date(`${dateStr || todayStr()}T00:00:00`);
  const day = base.getDay(); // 0=Sun..6=Sat
  const diffToMon = day === 0 ? -6 : 1 - day;
  const start = new Date(base);
  start.setDate(base.getDate() + diffToMon);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  const fmt = (dt) => {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const dd = String(dt.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  };
  return { start: fmt(start), end: fmt(end) };
}

function getMonthRange(ym) {
  const [y, m] = ym.split('-').map(Number);
  const lastDay = new Date(y, m, 0).getDate();
  return {
    start: `${ym}-01`,
    end: `${ym}-${String(lastDay).padStart(2, '0')}`,
  };
}

function enumerateDates(start, end) {
  const dates = [];
  const cur = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (cur <= last) {
    const y = cur.getFullYear();
    const m = String(cur.getMonth() + 1).padStart(2, '0');
    const d = String(cur.getDate()).padStart(2, '0');
    dates.push(`${y}-${m}-${d}`);
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

async function apiCall(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {}),
    },
  });
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('NO_PHP_BACKEND');
  }
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.detail || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}

export default function AttendanceDashboard() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(SS_AUTH_KEY) === '1');
  const [useLocalMode, setUseLocalMode] = useState(false);

  // Login form
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);

  // Dashboard state
  const [faculty, setFaculty] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [dailyDraft, setDailyDraft] = useState({});
  const [statsPeriod, setStatsPeriod] = useState('all'); // 'all' | 'monthly' | 'weekly'
  const [exportPeriod, setExportPeriod] = useState('monthly'); // 'weekly' | 'monthly'
  const [exportMonth, setExportMonth] = useState(() => monthStr(todayStr()));
  const [newFacultyName, setNewFacultyName] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [saving, setSaving] = useState(false);

  // Check PHP session on mount
  useEffect(() => {
    let active = true;
    apiCall('/attendance/me/')
      .then((res) => {
        if (!active) return;
        if (res.authenticated) {
          sessionStorage.setItem(SS_AUTH_KEY, '1');
          setAuthenticated(true);
          setUseLocalMode(false);
        }
      })
      .catch((err) => {
        if (!active) return;
        if (err.message === 'NO_PHP_BACKEND') {
          setUseLocalMode(true);
        } else if (err.status === 401 && sessionStorage.getItem(SS_AUTH_KEY) === '1') {
          // Server session expired
          sessionStorage.removeItem(SS_AUTH_KEY);
          setAuthenticated(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  // Load local storage helper
  const loadLocalData = () => {
    let storedFac = [];
    try {
      storedFac = JSON.parse(localStorage.getItem(LS_FACULTY_KEY) || 'null');
    } catch {
      storedFac = null;
    }
    if (!Array.isArray(storedFac)) {
      storedFac = DEFAULT_FACULTY;
      localStorage.setItem(LS_FACULTY_KEY, JSON.stringify(storedFac));
    }
    let storedRecs = [];
    try {
      storedRecs = JSON.parse(localStorage.getItem(LS_RECORDS_KEY) || '[]');
    } catch {
      storedRecs = [];
    }
    setFaculty(storedFac);
    setAllRecords(Array.isArray(storedRecs) ? storedRecs : []);
  };

  // Fetch faculty & records when authenticated
  const refreshData = async () => {
    if (useLocalMode) {
      loadLocalData();
      return;
    }
    try {
      const [facData, recData] = await Promise.all([
        apiCall('/attendance/faculty/'),
        apiCall('/attendance/records/'),
      ]);
      setFaculty(facData.faculty || []);
      setAllRecords(recData.records || []);
    } catch (err) {
      if (err.message === 'NO_PHP_BACKEND') {
        setUseLocalMode(true);
        loadLocalData();
      } else if (err.status === 401) {
        sessionStorage.removeItem(SS_AUTH_KEY);
        setAuthenticated(false);
      } else {
        setErrorMsg(err.message);
      }
    }
  };

  useEffect(() => {
    if (authenticated) {
      refreshData();
    }
  }, [authenticated, useLocalMode]);

  // Populate daily draft whenever selectedDate, faculty, or allRecords change
  useEffect(() => {
    const map = {};
    faculty.forEach((f) => {
      const existing = allRecords.find(
        (r) => Number(r.faculty_id) === Number(f.id) && r.record_date === selectedDate
      );
      map[f.id] = existing ? existing.status : 'Present';
    });
    setDailyDraft(map);
  }, [selectedDate, faculty, allRecords]);

  // Strict single-user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const trimmedUser = userId.trim();

    if (trimmedUser !== ALLOWED_USER_ID || password !== ALLOWED_PASSWORD) {
      setLoginError('Invalid User ID or Password. Only authorized administrator can log in.');
      return;
    }

    setLoginBusy(true);
    try {
      await apiCall('/attendance/login/', {
        method: 'POST',
        body: JSON.stringify({ username: trimmedUser, password }),
      });
      setUseLocalMode(false);
      sessionStorage.setItem(SS_AUTH_KEY, '1');
      setAuthenticated(true);
    } catch (err) {
      if (err.message === 'NO_PHP_BACKEND') {
        // Local dev preview fallback
        setUseLocalMode(true);
        sessionStorage.setItem(SS_AUTH_KEY, '1');
        setAuthenticated(true);
      } else {
        setLoginError(err.message || 'Login failed.');
      }
    } finally {
      setLoginBusy(false);
    }
  };

  const handleLogout = async () => {
    if (!useLocalMode) {
      try {
        await apiCall('/attendance/logout/', { method: 'POST' });
      } catch {
        // ignore
      }
    }
    sessionStorage.removeItem(SS_AUTH_KEY);
    setAuthenticated(false);
    setUserId('');
    setPassword('');
  };

  const notify = (msg) => {
    setErrorMsg('');
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(''), 4000);
  };

  // Mark attendance handlers
  const setFacultyStatus = (facId, status) => {
    setDailyDraft((prev) => ({ ...prev, [facId]: status }));
  };

  const markAllPresent = () => {
    const next = {};
    faculty.forEach((f) => {
      next[f.id] = 'Present';
    });
    setDailyDraft(next);
  };

  const handleSaveAttendance = async () => {
    if (!selectedDate) return;
    setSaving(true);
    setErrorMsg('');
    const payloadRecords = faculty.map((f) => ({
      faculty_id: f.id,
      faculty_name: f.name,
      status: dailyDraft[f.id] || 'Present',
    }));

    try {
      if (useLocalMode) {
        const filtered = allRecords.filter((r) => r.record_date !== selectedDate);
        const added = payloadRecords.map((r) => ({
          faculty_id: r.faculty_id,
          faculty_name: r.faculty_name,
          record_date: selectedDate,
          status: r.status,
        }));
        const nextAll = [...filtered, ...added];
        localStorage.setItem(LS_RECORDS_KEY, JSON.stringify(nextAll));
        setAllRecords(nextAll);
      } else {
        await apiCall('/attendance/records/', {
          method: 'POST',
          body: JSON.stringify({
            date: selectedDate,
            records: payloadRecords,
          }),
        });
        await refreshData();
      }
      notify(`Attendance saved for ${selectedDate}!`);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save attendance.');
    } finally {
      setSaving(false);
    }
  };

  // Add faculty
  const handleAddFaculty = async (e) => {
    e.preventDefault();
    const name = newFacultyName.trim();
    if (!name) return;
    setErrorMsg('');

    try {
      if (useLocalMode) {
        const nextId = faculty.reduce((max, f) => Math.max(max, Number(f.id)), 0) + 1;
        const nextFac = [...faculty, { id: nextId, name }];
        localStorage.setItem(LS_FACULTY_KEY, JSON.stringify(nextFac));
        setFaculty(nextFac);
      } else {
        await apiCall('/attendance/faculty/', {
          method: 'POST',
          body: JSON.stringify({ name }),
        });
        await refreshData();
      }
      setNewFacultyName('');
      notify(`Added faculty: ${name}`);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to add faculty.');
    }
  };

  // Remove faculty
  const handleRemoveFaculty = async (fac) => {
    if (!window.confirm(`Remove "${fac.name}" from faculty attendance? Their past attendance records will also be removed.`)) {
      return;
    }
    setErrorMsg('');
    try {
      if (useLocalMode) {
        const nextFac = faculty.filter((f) => Number(f.id) !== Number(fac.id));
        const nextRecs = allRecords.filter((r) => Number(r.faculty_id) !== Number(fac.id));
        localStorage.setItem(LS_FACULTY_KEY, JSON.stringify(nextFac));
        localStorage.setItem(LS_RECORDS_KEY, JSON.stringify(nextRecs));
        setFaculty(nextFac);
        setAllRecords(nextRecs);
      } else {
        await apiCall(`/attendance/faculty/${fac.id}/delete/`, {
          method: 'POST',
        });
        await refreshData();
      }
      notify(`Removed faculty: ${fac.name}`);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to remove faculty.');
    }
  };

  // Compute attendance percentage per person based on selected filter
  const facultyStats = useMemo(() => {
    let start = '';
    let end = '';
    if (statsPeriod === 'weekly') {
      ({ start, end } = getWeekRange(selectedDate));
    } else if (statsPeriod === 'monthly') {
      ({ start, end } = getMonthRange(monthStr(selectedDate)));
    }

    return faculty.map((f) => {
      const recs = allRecords.filter((r) => {
        if (Number(r.faculty_id) !== Number(f.id)) return false;
        if (start && end) {
          return r.record_date >= start && r.record_date <= end;
        }
        return true;
      });

      const total = recs.length;
      let present = 0;
      let halfDay = 0;
      let absent = 0;
      recs.forEach((r) => {
        if (r.status === 'Present') present++;
        else if (r.status === 'Half Day') halfDay++;
        else if (r.status === 'Absent') absent++;
      });

      const score = present + halfDay * 0.5;
      const percentage = total > 0 ? Math.round((score / total) * 1000) / 10 : 0;

      return {
        ...f,
        total,
        present,
        halfDay,
        absent,
        percentage,
      };
    });
  }, [faculty, allRecords, statsPeriod, selectedDate]);

  // Summary counters for selected date
  const todaySummary = useMemo(() => {
    let present = 0;
    let absent = 0;
    let halfDay = 0;
    faculty.forEach((f) => {
      const st = dailyDraft[f.id] || 'Present';
      if (st === 'Present') present++;
      else if (st === 'Absent') absent++;
      else if (st === 'Half Day') halfDay++;
    });
    const avgPct =
      facultyStats.length > 0
        ? Math.round(
            (facultyStats.reduce((sum, s) => sum + s.percentage, 0) / facultyStats.length) * 10
          ) / 10
        : 0;
    return { total: faculty.length, present, absent, halfDay, avgPct };
  }, [faculty, dailyDraft, facultyStats]);

  // CSV Export (Weekly or Monthly)
  const handleDownloadCSV = (periodType) => {
    let range;
    let fileLabel;
    if (periodType === 'weekly') {
      range = getWeekRange(selectedDate);
      fileLabel = `Weekly_${range.start}_to_${range.end}`;
    } else {
      range = getMonthRange(exportMonth);
      fileLabel = `Monthly_${exportMonth}`;
    }

    const dates = enumerateDates(range.start, range.end);
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;

    const header = [
      'Faculty Name',
      ...dates,
      'Total Marked Days',
      'Present',
      'Half Day',
      'Absent',
      'Attendance %',
    ];

    const rows = faculty.map((f) => {
      let total = 0;
      let present = 0;
      let halfDay = 0;
      let absent = 0;

      const dateCells = dates.map((d) => {
        const rec = allRecords.find(
          (r) => Number(r.faculty_id) === Number(f.id) && r.record_date === d
        );
        if (!rec) return '-';
        total++;
        if (rec.status === 'Present') present++;
        else if (rec.status === 'Half Day') halfDay++;
        else if (rec.status === 'Absent') absent++;
        return rec.status;
      });

      const pct = total > 0 ? `${Math.round(((present + halfDay * 0.5) / total) * 1000) / 10}%` : '0%';
      return [f.name, ...dateCells, total, present, halfDay, absent, pct];
    });

    const csvContent =
      '\uFEFF' + [header, ...rows].map((row) => row.map(esc).join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Annai_Tuition_Faculty_Attendance_${fileLabel}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    notify(`Downloaded ${periodType} CSV report!`);
  };

  // =========================================================================
  // RENDER: LOGIN GATE
  // =========================================================================
  if (!authenticated) {
    return (
      <main className="att-login-page">
        <div className="container">
          <form className="att-login-card" onSubmit={handleLogin}>
            <div className="att-login-badge">
              <Lock size={20} />
              <span>Authorized Faculty Attendance Portal</span>
            </div>
            <h1>Faculty Attendance Login</h1>
            <p className="att-login-sub">
              Restricted access. Only the authorized centre head credentials can sign in.
            </p>

            <label className="att-field">
              <span>User ID</span>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
                required
                autoComplete="username"
              />
            </label>

            <label className="att-field">
              <span>Password</span>
              <div className="att-pass-wrap">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="att-eye-btn"
                  onClick={() => setShowPass((v) => !v)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            {loginError && <div className="att-alert att-alert-error">{loginError}</div>}

            <button type="submit" className="att-btn-primary" disabled={loginBusy}>
              {loginBusy ? 'Verifying...' : 'Sign In to Dashboard'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // =========================================================================
  // RENDER: DASHBOARD
  // =========================================================================
  return (
    <main className="att-dashboard">
      <div className="container">
        {/* Top Toolbar */}
        <div className="att-header">
          <div>
            <span className="att-eyebrow">Annai Tuition Centre · Staff Portal</span>
            <h1>Faculty Attendance Dashboard</h1>
            <p className="att-welcome">
              Signed in as <strong>{ALLOWED_USER_ID}</strong>
            </p>
          </div>
          <button type="button" className="att-btn-outline" onClick={handleLogout}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        {statusMsg && <div className="att-alert att-alert-success">{statusMsg}</div>}
        {errorMsg && <div className="att-alert att-alert-error">{errorMsg}</div>}

        {/* Summary Cards */}
        <div className="att-summary-grid">
          <div className="att-stat-card">
            <Users size={20} className="att-stat-icon" />
            <div>
              <span>Total Faculty</span>
              <strong>{todaySummary.total}</strong>
            </div>
          </div>
          <div className="att-stat-card stat-present">
            <CheckCircle2 size={20} className="att-stat-icon" />
            <div>
              <span>Present ({selectedDate})</span>
              <strong>{todaySummary.present}</strong>
            </div>
          </div>
          <div className="att-stat-card stat-absent">
            <XCircle size={20} className="att-stat-icon" />
            <div>
              <span>Absent ({selectedDate})</span>
              <strong>{todaySummary.absent}</strong>
            </div>
          </div>
          <div className="att-stat-card stat-pct">
            <BarChart3 size={20} className="att-stat-icon" />
            <div>
              <span>Overall Avg %</span>
              <strong>{todaySummary.avgPct}%</strong>
            </div>
          </div>
        </div>

        {/* Section 1: Mark Daily Attendance */}
        <section className="att-panel">
          <div className="att-panel-head">
            <div>
              <h2>
                <Calendar size={18} /> Mark Daily Attendance
              </h2>
              <p>Select date and mark Present, Absent, or Half Day for each faculty member.</p>
            </div>
            <div className="att-date-controls">
              <label className="att-date-label">
                <span>Date:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </label>
              <button type="button" className="att-btn-secondary" onClick={markAllPresent}>
                <CheckCheck size={15} /> Mark All Present
              </button>
            </div>
          </div>

          {faculty.length === 0 ? (
            <p className="att-empty">No faculty added yet. Add a faculty member below.</p>
          ) : (
            <div className="att-mark-list">
              {faculty.map((f, idx) => {
                const currentStatus = dailyDraft[f.id] || 'Present';
                const savedRec = allRecords.find(
                  (r) => Number(r.faculty_id) === Number(f.id) && r.record_date === selectedDate
                );
                return (
                  <div className="att-mark-row" key={f.id}>
                    <div className="att-faculty-info">
                      <span className="att-index">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <strong>{f.name}</strong>
                        <small>
                          {savedRec ? `Saved: ${savedRec.status}` : 'Not saved yet for this date'}
                        </small>
                      </div>
                    </div>

                    <div className="att-status-pills">
                      {['Present', 'Half Day', 'Absent'].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setFacultyStatus(f.id, st)}
                          className={`att-pill pill-${st.toLowerCase().replace(' ', '-')} ${
                            currentStatus === st ? 'active' : ''
                          }`}
                        >
                          {st === 'Present' && <CheckCircle2 size={14} />}
                          {st === 'Half Day' && <Clock size={14} />}
                          {st === 'Absent' && <XCircle size={14} />}
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {faculty.length > 0 && (
            <div className="att-save-bar">
              <button
                type="button"
                className="att-btn-primary"
                onClick={handleSaveAttendance}
                disabled={saving}
              >
                {saving ? 'Saving...' : `Save Attendance for ${selectedDate}`}
              </button>
            </div>
          )}
        </section>

        {/* Section 2: Attendance Percentage Per Person */}
        <section className="att-panel">
          <div className="att-panel-head">
            <div>
              <h2>
                <BarChart3 size={18} /> Attendance Percentage Per Person
              </h2>
              <p>Individual attendance breakdown (Half Day counts as 0.5 day).</p>
            </div>
            <div className="att-filter-tabs">
              {[
                { key: 'all', label: 'All Time' },
                { key: 'monthly', label: 'This Month' },
                { key: 'weekly', label: 'This Week' },
              ].map((t) => (
                <button
                  key={t.key}
                  type="button"
                  className={`att-tab ${statsPeriod === t.key ? 'active' : ''}`}
                  onClick={() => setStatsPeriod(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="att-table-wrap">
            <table className="att-table">
              <thead>
                <tr>
                  <th>Faculty Name</th>
                  <th>Marked Days</th>
                  <th>Present</th>
                  <th>Half Day</th>
                  <th>Absent</th>
                  <th>Attendance %</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {facultyStats.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <strong>{s.name}</strong>
                    </td>
                    <td>{s.total}</td>
                    <td className="txt-green">{s.present}</td>
                    <td className="txt-amber">{s.halfDay}</td>
                    <td className="txt-red">{s.absent}</td>
                    <td>
                      <div className="att-pct-cell">
                        <div className="att-progress-track">
                          <div
                            className="att-progress-fill"
                            style={{ width: `${Math.min(100, s.percentage)}%` }}
                          />
                        </div>
                        <strong>{s.percentage}%</strong>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="att-remove-btn"
                        onClick={() => handleRemoveFaculty(s)}
                        title={`Remove ${s.name}`}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {facultyStats.length === 0 && (
                  <tr>
                    <td colSpan="7" className="att-empty">
                      No faculty records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Add Faculty & Export CSV Reports */}
        <div className="att-two-col">
          {/* Add New Faculty */}
          <section className="att-panel">
            <h2>
              <UserPlus size={18} /> Add New Faculty
            </h2>
            <p className="att-panel-sub">Add a new teacher or staff member to the attendance register.</p>
            <form className="att-add-form" onSubmit={handleAddFaculty}>
              <input
                type="text"
                value={newFacultyName}
                onChange={(e) => setNewFacultyName(e.target.value)}
                placeholder="Enter full name (e.g. Karthik R)"
                required
              />
              <button type="submit" className="att-btn-primary">
                <UserPlus size={16} /> Add Faculty
              </button>
            </form>
          </section>

          {/* Download CSV Report */}
          <section className="att-panel">
            <h2>
              <Download size={18} /> Download Attendance CSV
            </h2>
            <p className="att-panel-sub">Export weekly or monthly attendance sheet for Excel / Sheets.</p>

            <div className="att-export-controls">
              <div className="att-export-row">
                <button
                  type="button"
                  className="att-btn-secondary"
                  onClick={() => handleDownloadCSV('weekly')}
                >
                  <Download size={15} /> Download Weekly CSV
                </button>
                <small>Week of {selectedDate}</small>
              </div>

              <div className="att-export-row">
                <input
                  type="month"
                  value={exportMonth}
                  onChange={(e) => setExportMonth(e.target.value)}
                  className="att-month-input"
                />
                <button
                  type="button"
                  className="att-btn-primary"
                  onClick={() => handleDownloadCSV('monthly')}
                >
                  <Download size={15} /> Download Monthly CSV
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
