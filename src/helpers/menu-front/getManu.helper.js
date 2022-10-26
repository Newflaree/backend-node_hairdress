const getMenuFront = ( role = 'USER_ROLE' ) => {
  const menu = [
    {
      title: 'Inicio',
      url: '',
      submenu: []
    },
    {
      title: 'Productos',
      url: '',
      submenu: []
    },
    {
      title: 'Servicios',
      url: '',
      submenu: []
    },
    {
      title: 'Contacto',
      url: '',
      submenu: []
    },
  ];

  if ( role === 'ADMIN_ROLE' ) {
    menu.push({ 
      title: 'Mantenimiento', 
      url: '', 
      submenu: [
        { title: 'test-1', url: '' },
        { title: 'test-2', url: '' },
        { title: 'test-3', url: '' },
        { title: 'test-4', url: '' },
        { title: 'test-5', url: '' },
      ]
    });
  }

  return menu;
}

module.exports = getMenuFront;
