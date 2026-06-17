const CB = {
  currentUser: null,

  roles: {
    admin: {
      label: 'Admin',
      color: 'role-admin',
      pages: ['overview','access-requests','users','permissions','properties','jobs','schedules','cleaners','reports','settings']
    },
    operations: {
      label: 'Operations',
      color: 'role-operations',
      pages: ['overview','jobs','schedules','cleaners','properties','issues','reports']
    },
    property_manager: {
      label: 'Property Manager',
      color: 'role-property_manager',
      pages: ['overview','my-properties','bookings','cleaning-status','issues','reports']
    },
    cleaner: {
      label: 'Cleaner',
      color: 'role-cleaner',
      pages: ['my-jobs','checklist','property-detail','upload-photos','report-issue']
    }
  },

  navItems: {
    admin: [
      { section: 'Main', items: [
        { id: 'overview', label: 'Overview', icon: 'grid', href: 'dashboard.html' },
        { id: 'access-requests', label: 'Access requests', icon: 'user-check', href: 'access-requests.html', badge: 3 },
      ]},
      { section: 'People', items: [
        { id: 'users', label: 'All users', icon: 'users', href: 'users.html' },
        { id: 'permissions', label: 'Permissions', icon: 'lock', href: 'permissions.html' },
      ]},
      { section: 'Operations', items: [
        { id: 'properties', label: 'Properties', icon: 'home', href: 'properties.html' },
        { id: 'jobs', label: 'Jobs', icon: 'clipboard-list', href: 'jobs.html' },
        { id: 'schedules', label: 'Schedules', icon: 'calendar', href: 'schedules.html' },
        { id: 'cleaners', label: 'Cleaners', icon: 'user-group', href: 'cleaners.html' },
        { id: 'reports', label: 'Reports', icon: 'chart-bar', href: 'reports.html' },
      ]},
      { section: 'System', items: [
        { id: 'settings', label: 'Settings', icon: 'settings', href: 'settings.html' },
      ]}
    ],
    operations: [
      { section: 'Main', items: [
        { id: 'overview', label: 'Overview', icon: 'grid', href: 'dashboard.html' },
      ]},
      { section: 'Operations', items: [
        { id: 'jobs', label: 'Jobs', icon: 'clipboard-list', href: 'jobs.html' },
        { id: 'schedules', label: 'Schedules', icon: 'calendar', href: 'schedules.html' },
        { id: 'cleaners', label: 'Cleaners', icon: 'user-group', href: 'cleaners.html' },
        { id: 'properties', label: 'Properties', icon: 'home', href: 'properties.html' },
        { id: 'issues', label: 'Issues', icon: 'alert-triangle', href: 'issues.html', badge: 2 },
        { id: 'reports', label: 'Reports', icon: 'chart-bar', href: 'reports.html' },
      ]}
    ],
    property_manager: [
      { section: 'Main', items: [
        { id: 'overview', label: 'Overview', icon: 'grid', href: 'dashboard.html' },
      ]},
      { section: 'My portfolio', items: [
        { id: 'my-properties', label: 'My properties', icon: 'home', href: 'properties.html' },
        { id: 'bookings', label: 'Bookings', icon: 'calendar', href: 'bookings.html' },
        { id: 'cleaning-status', label: 'Cleaning status', icon: 'check-circle', href: 'jobs.html' },
        { id: 'issues', label: 'Issues', icon: 'alert-triangle', href: 'issues.html' },
        { id: 'reports', label: 'Reports', icon: 'chart-bar', href: 'reports.html' },
      ]}
    ],
    cleaner: [
      { section: 'My work', items: [
        { id: 'my-jobs', label: 'My jobs', icon: 'clipboard-list', href: 'my-jobs.html' },
        { id: 'checklist', label: 'Checklists', icon: 'check-circle', href: 'checklist.html' },
        { id: 'property-detail', label: 'Property info', icon: 'home', href: 'property-detail.html' },
        { id: 'upload-photos', label: 'Upload photos', icon: 'camera', href: 'upload-photos.html' },
        { id: 'report-issue', label: 'Report issue', icon: 'alert-triangle', href: 'report-issue.html' },
      ]}
    ]
  },

  icons: {
    'grid': '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    'user-check': '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
    'users': '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'lock': '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    'home': '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'clipboard-list': '<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>',
    'calendar': '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'user-group': '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'chart-bar': '<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    'settings': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    'alert-triangle': '<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    'check-circle': '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    'camera': '<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    'logout': '<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    'plus': '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    'search': '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    'filter': '<svg viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    'download': '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    'edit': '<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    'trash': '<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    'upload': '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    'x': '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'eye': '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  },

  init(pageId, user) {
    this.currentUser = user || { name: 'Sarah Mitchell', initials: 'SM', role: 'admin' };
    this.renderSidebar(pageId);
  },

  renderSidebar(activeId) {
    const u = this.currentUser;
    const role = u.role;
    const nav = this.navItems[role] || this.navItems.admin;
    const roleConfig = this.roles[role];

    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    let html = `
      <a href="dashboard.html" class="sidebar-logo">CLEAN<span>BOSS</span></a>
      <div class="sidebar-role-badge">${roleConfig.label}</div>
    `;

    nav.forEach(section => {
      html += `<div class="sidebar-section"><div class="sidebar-section-label">${section.section}</div>`;
      section.items.forEach(item => {
        const active = item.id === activeId ? ' active' : '';
        const badge = item.badge ? `<span class="badge">${item.badge}</span>` : '';
        html += `<a href="${item.href}" class="sidebar-link${active}">${this.icons[item.icon] || ''}${item.label}${badge}</a>`;
      });
      html += `</div>`;
    });

    html += `
      <div class="sidebar-footer">
        <div class="user-pill">
          <div class="avatar">${u.initials}</div>
          <div>
            <div class="user-name">${u.name}</div>
            <div class="user-role">${roleConfig.label}</div>
          </div>
          <button class="btn-logout" title="Log out" onclick="window.location='../login.html'">
            ${this.icons.logout}
          </button>
        </div>
      </div>
    `;

    sidebar.innerHTML = html;
  },

  getSimulatedUser() {
    const param = new URLSearchParams(window.location.search).get('role');
    const users = {
      admin: { name: 'Sarah Mitchell', initials: 'SM', role: 'admin' },
      operations: { name: 'James Tahi', initials: 'JT', role: 'operations' },
      property_manager: { name: 'Priya Nair', initials: 'PN', role: 'property_manager' },
      cleaner: { name: 'Marcus Lee', initials: 'ML', role: 'cleaner' },
    };
    return users[param] || users.admin;
  }
};
