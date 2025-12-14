'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, HardHat, Wrench, Shield, Clock, Award, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Bangunan Komersial",
      description: "Konstruksi gedung perkantoran, retail, dan fasilitas bisnis modern dengan standar internasional.",
      image: "/commercial-building.jpg"
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Bangunan Industri",
      description: "Fasilitas pabrik, gudang, dan infrastruktur industri yang kokoh dan efisien.",
      image: "/industrial-building.jpg"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Renovasi & Restorasi",
      description: "Perbaikan dan peningkatan bangunan existing dengan teknologi terkini.",
      image: "/logo.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Konsultasi Konstruksi",
      description: "Ahli konsultasi untuk perencanaan dan manajemen proyek konstruksi.",
      image: "/logo.png"
    }
  ]

  const advantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tepat Waktu",
      description: "Komitmen pada deadline proyek dengan manajemen waktu yang efisien"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Berkualitas",
      description: "Standar kualitas tertinggi dengan material dan tenaga ahli terbaik"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dan bersertifikat di bidang konstruksi"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT IZZA SUMBER JAYA</h1>
                <p className="text-xs text-gray-600">Konstruksi Profesional</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Hubungi Kami
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Beranda</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Tentang</a>
              <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Layanan</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Kontak</a>
              <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/construction-hero.jpg"
            alt="Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-700">
            🏗️ Konstruksi Gedung Profesional
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              PT IZZA SUMBER JAYA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Mitra terpercaya untuk solusi konstruksi gedung yang berkualitas, 
            kokoh, dan berkelanjutan di seluruh Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
              Mulai Proyek Anda
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2">
              Lihat Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-100">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-blue-100">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">PT IZZA SUMBER JAYA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan konstruksi terkemuka dengan komitmen pada kualitas, 
              keamanan, dan kepuasan pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="PT IZZA SUMBER JAYA Logo"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perusahaan konstruksi terdepan yang menghadirkan solusi bangunan 
                  inovatif dan berkelanjutan untuk kemajuan infrastruktur Indonesia.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Memberikan hasil konstruksi dengan kualitas tertinggi</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mengutamakan keselamatan kerja dan keberlanjutan lingkungan</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Membangun hubungan jangka panjang dengan klien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi konstruksi komprehensif untuk berbagai kebutuhan bangunan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang membuat kami menjadi pilihan terbaik untuk proyek konstruksi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap untuk memulai proyek konstruksi Anda? Tim kami siap membantu mewujudkan visi bangunan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">PT IZZA SUMBER JAYA</h4>
                    <p className="text-blue-100">Konstruksi Gedung Profesional</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Alamat</h4>
                    <p className="text-blue-100">
                      Blok Pajagan Nomor 11, Desa/Kelurahan Garawangi<br />
                      Kec. Sumberjaya, Kab. Majalengka<br />
                      Provinsi Jawa Barat, 45455
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Telepon</h4>
                    <p className="text-blue-100">0823-1204-2902</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-blue-100">info@izzasumberjaya.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Kirim Pesan</CardTitle>
                <CardDescription>
                  Kirimkan pertanyaan atau permintaan proyek Anda kepada kami.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Konsultasi Proyek Konstruksi"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PT IZZA SUMBER JAYA</h3>
                  <p className="text-gray-400 text-sm">Konstruksi Profesional</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Mitra terpercaya untuk solusi konstruksi gedung yang berkualitas, 
                kokoh, dan berkelanjutan di seluruh Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bangunan Komersial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bangunan Industri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi & Restorasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Konstruksi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT IZZA SUMBER JAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}