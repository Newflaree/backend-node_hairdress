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
        { title: 'Reservas', url: '' },
        { title: 'Inicio', url: '' },
        /*
         * Config SlideShow,
         * Edit About us,
         * Show 4 Featured Products
         * Show 6 images on Images Gallery
        * */
        { title: 'Productos', url: '' },
        /*
         * Product Categories Maintenance
         * Product Brands Maintenance
         * Products Maintenance
         * TODO: Send email when added a new product. Ask before it
         * TODO: Last sells timeline
        * */
        { title: 'Servicios', url: '' },
        /*
         * Services Categories Maintenance
         * Services Maintenance
        * */
        { title: 'Contacto', url: '' },
      ]
    });
  }

  return menu;
}

module.exports = getMenuFront;
