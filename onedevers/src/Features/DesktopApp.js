import React from 'react'

const DesktopApp = () => {
  return (
    <div id="desktopapp" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://cdn.dribbble.com/users/151160/screenshots/14913349/media/beac59dae99c6ee49610b9a0d22c3ab1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            desktop app
            <br className="hidden md:block" />
            {/* jumps over{' '} */}
            <span className="inline-block text-deep-purple-accent-400">
              Development
            </span>
          </h5>
          <p className="mb-6 text-gray-900">
            A team is working on creating high quality desktop applications and high-end designs, in order to facilitate the work of institutions through constant communication with our customers and a permanent analysis of their problems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopApp
