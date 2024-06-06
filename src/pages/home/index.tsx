import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Clientes from './Clientes'
import Contacto from './Contacto'
import Experiencia from './Experiencia'
import Hero from './Hero'
import Novedades from './Novedades'
import Seguridad from './Seguridad'
import Servicios from './Servicios'
import SomosSoa from './SomosSoa'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'SOA Servicios Operacionales Andinos'
  }, [])

  return (
    <Layout>
      <Hero />
      <SomosSoa />
      <Experiencia />
      <Seguridad />
      <Servicios />
      <Clientes />
      <Novedades />
      <Contacto />
    </Layout>
  )
}

export default Index
