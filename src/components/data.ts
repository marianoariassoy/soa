import { Facebook, Instagram, Linkedin } from './icons'

export const menu = [
  {
    title: 'Quienes Somos?',
    path: '#quienes-somos'
  },
  {
    title: 'Experiencia',
    path: '#experiencia'
  },
  {
    title: 'Seguridad',
    path: '#seguridad-y-medio-ambiente'
  },
  {
    title: 'Servicios',
    path: '#servicios'
  },
  {
    title: 'Clientes y proyectos',
    path: '#clientes-y-proyectos'
  },
  {
    title: 'Novedades',
    path: '#novedades'
  },
  {
    title: 'Contacto',
    path: '#contacto'
  }
]

export const social = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/soasistemas/',
    icon: Facebook()
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/soa_sistemas/',
    icon: Instagram()
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/company/soa-sistemas/',
    icon: Linkedin()
  }
]

export const whatsapp = {
  title: 'WhatsApp',
  phone: 'https://wa.me/+5491130000000'
}

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor completá este dato'
  }
}
