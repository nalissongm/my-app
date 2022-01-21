//import ImageFile from '../../../public/assets/img/logo.png';

const handleClick = () => {
  alert('funcionando');
};

export const dataMenu = {
  dataLogo: {
    title: 'HubLocal',
    url: './assets/img/logo.png',
    func: handleClick,
  },
  dataLinks: [
    {
      title: 'HubLocal',
      link: '#hublocal',
    },
    {
      title: 'Solução',
      link: '#solucao',
    },
    {
      title: 'Recursos',
      link: '#recursos',
    },
    {
      title: 'Clientes',
      link: '#clientes',
    },
  ],
  dataButton: {
    negative: true,
    title: 'Comece agora',
  },
};
