import { Application, ControllerConstructor } from '@hotwired/stimulus'

// import '../styles/index.css'

const controllers = import.meta.glob<{ default: ControllerConstructor }>('./controllers/*.ts')
const application = Application.start()

for (const path in controllers) {
  const identifier = path.replace(/(.*\/|\.\w+)/g, '').toLowerCase()

  controllers[path]().then(({ default: controllerConstructor }) => application.register(identifier, controllerConstructor))
}
