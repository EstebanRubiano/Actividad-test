import React from 'react';
import { useHome } from './useHome';
import './home.css';

export const Home = ({ activeSection }) => {
  const { formData, isSubmitting, feedback, handleChange, handleSubmit } = useHome();

  return (
    <div className="home-view">
      
      {/* Sección 1: Presentación de la Idea */}
      {activeSection === 'presentacion' && (
        <section id="presentacion" className="home-section home-section--presentation">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="section-tag">Arquitectura Distribuida</span>
            <h1 className="hero-title">Automatización Fiscal y Gestión Financiera</h1>
            <p className="hero-lead">
              Solución fintech orientada a desacoplar el cálculo contable tradicional mediante microservicios independientes. Resuelve la complejidad de la declaración de renta y centraliza la salud financiera de personas y empresas.
            </p>
            <div className="hero-metrics">
              <div className="metric-item">
                <strong>100%</strong>
                <span>Parametrizable a normas DIAN</span>
              </div>
              <div className="metric-item">
                <strong>O(1)</strong>
                <span>Cálculo tributario reactivo</span>
              </div>
              <div className="metric-item">
                <strong>REST/gRPC</strong>
                <span>Interconexión de servicios</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
              alt="Visualización analítica de balance contable y finanzas" 
              className="hero-image"
              loading="lazy"
            />
          </div>
        </div>
        </section>
      )}

      {/* Sección 2: Módulos & Funcionalidades */}
      {activeSection === 'funcionalidades' && (
        <section id="funcionalidades" className="home-section home-section--features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Alcance Técnico</span>
            <h2>Capacidades del Sistema</h2>
            <p className="section-desc">Ecosistema modular de servicios financieros independientes.</p>
          </div>

          <div className="features-grid">
            <article className="feature-card feature-card--highlight">
              <span className="feature-badge">Módulo Crítico</span>
              <h3>Motor de Renta Persona Natural</h3>
              <p>Clasificación automatizada por cédulas (laborales, capital, no laborales, pensiones y dividendos).</p>
              <ul className="feature-details">
                <li>Depuración paramétrica de renta líquida</li>
                <li>Validación de topes de ingresos y patrimonio</li>
                <li>Generación borrador Formulario 210</li>
              </ul>
            </article>

            <article className="feature-card">
              <h3>Ingesta y Conciliación Bancaria</h3>
              <p>Mapeo desatendido de extractos bancarios y certificados tributarios mediante parsers asíncronos.</p>
              <ul className="feature-details">
                <li>Procesamiento de formatos CSV, XLS y PDF estructurado</li>
                <li>Reglas automáticas de categorización de gastos</li>
                <li>Auditoría cruzada de saldos al 31 de diciembre</li>
              </ul>
            </article>

            <article className="feature-card">
              <h3>Score Fiscal Preventivo</h3>
              <p>Simulador continuo que proyecta el impuesto a cargo con cada movimiento registrado.</p>
              <ul className="feature-details">
                <li>Alertas tempranas de superación de umbrales</li>
                <li>Optimización legal de deducciones y rentas exentas</li>
                <li>Cálculo en tiempo real de retenciones en la fuente</li>
              </ul>
            </article>

            <article className="feature-card">
              <h3>Pipeline de Facturación Electrónica</h3>
              <p>Conexión directa con proveedores autorizados para consolidación de compras y ventas.</p>
              <ul className="feature-details">
                <li>Validación de firmas digitales y XML (UBL 2.1)</li>
                <li>Deducción instantánea de IVA y retenciones asumidas</li>
                <li>Monitoreo de estado de validación previa</li>
              </ul>
            </article>

            <article className="feature-card">
              <h3>Planeación Financiera & Forecast</h3>
              <p>Modelado matemático predictivo para presupuestos personales y proyecciones de flujo de caja.</p>
              <ul className="feature-details">
                <li>Análisis de varianza de gasto mensual</li>
                <li>Estimación de capital de trabajo disponible</li>
                <li>Estrategias de amortización de pasivos</li>
              </ul>
            </article>

            <article className="feature-card">
              <h3>Bóveda Cifrada de Documentos</h3>
              <p>Almacenamiento inmutable para soportes contables, facturas y declaraciones previas.</p>
              <ul className="feature-details">
                <li>Cifrado en reposo AES-256</li>
                <li>Indexación de metadatos fiscales</li>
                <li>Trazabilidad total contra solicitudes de auditoría</li>
              </ul>
            </article>
          </div>
        </div>
        </section>
      )}

      {/* Sección 3: Buzón de Ideas & Contacto */}
      {activeSection === 'buzon-ideas' && (
        <section id="buzon-ideas" className="home-section home-section--feedback">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Retroalimentación Técnica</span>
            <h2>Buzón de Ideas y Requerimientos</h2>
            <p className="section-desc">Canal directo para proponer integraciones, reglas fiscales o mejoras de arquitectura.</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Evolución Colaborativa</h3>
              <p>
                Este gestor se concibe como una plataforma viva. Las sugerencias registradas pasan directamente al backlog de arquitectura para priorización según impacto fiscal y viabilidad técnica.
              </p>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <strong>Revisión de Casos</strong>
                  <span>Sprints quincenales de despliegue</span>
                </div>
                <div className="contact-info-item">
                  <strong>Disponibilidad de Integración</strong>
                  <span>APIs abiertas en etapa Alpha</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading">
                <span className="form-kicker">Nueva propuesta</span>
                <h3>Cuéntanos qué podemos mejorar</h3>
                <p>Comparte una necesidad concreta y la revisaremos en el próximo ciclo técnico.</p>
              </div>

              {feedback.message && (
                <div className={`form-alert form-alert--${feedback.type}`}>
                  {feedback.message}
                </div>
              )}

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Correo Corporativo / Personal *</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="carlos@empresa.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tipoUsuario">Perfil Operativo</label>
                  <select
                    id="tipoUsuario"
                    name="tipoUsuario"
                    value={formData.tipoUsuario}
                    onChange={handleChange}
                  >
                    <option value="persona_natural">Persona Natural Declarante</option>
                    <option value="contador">Contador / Revisor Fiscal</option>
                    <option value="pyme">Empresa / PYME</option>
                    <option value="desarrollador">Desarrollador / Integrador</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="categoria">Área de la Propuesta</label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                  >
                    <option value="declaracion_renta">Motor de Renta & Impuestos</option>
                    <option value="integracion_bancaria">Conexiones Bancarias (Open Finance)</option>
                    <option value="seguridad">Seguridad & Cifrado</option>
                    <option value="ux_ui">Experiencia de Usuario / Reportes</option>
                    <option value="otra">Otra Funcionalidad</option>
                  </select>
                </div>

                <div className="form-group form-group--full">
                  <label htmlFor="tituloPropuesta">Título de la idea</label>
                  <input
                    type="text"
                    id="tituloPropuesta"
                    name="tituloPropuesta"
                    value={formData.tituloPropuesta}
                    onChange={handleChange}
                    placeholder="Ej. Integración con API de Certificados de Retención"
                  />
                </div>

                <div className="form-group form-group--full">
                  <label htmlFor="descripcion">Describe tu idea *</label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    rows="4"
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Explica qué problema resuelve, datos de entrada necesarios y el resultado esperado..."
                    required
                  ></textarea>
                </div>

                <div className="form-group form-group--full">
                  <label htmlFor="impactoEstimado">Impacto Esperado</label>
                  <select
                    id="impactoEstimado"
                    name="impactoEstimado"
                    value={formData.impactoEstimado}
                    onChange={handleChange}
                  >
                    <option value="alto">Alto (Ahorro crítico de tiempo o cálculo clave)</option>
                    <option value="medio">Medio (Mejora operativa recurrente)</option>
                    <option value="bajo">Bajo (Conveniencia o detalle estético)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando idea...' : 'Enviar idea'}
              </button>
            </form>
          </div>
        </div>
        </section>
      )}

    </div>
  );
};