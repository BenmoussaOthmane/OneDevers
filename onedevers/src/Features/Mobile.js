import React from 'react'

const Mobile = () => {
    return (
        <div id ="mobile" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
        <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://cdn.dribbble.com/users/1963775/screenshots/15615286/media/88525345400edb4724d94109b1f3a576.png?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
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
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{' '}
              <span className="inline-block text-deep-purple-accent-400">
                a lazy dog
              </span>
            </h5>
            <p className="mb-6 text-gray-900">
            We have vast experience in mobile dev technologies and have created many apps from around the world.
In this Gig we offer a great quality ios app and/or Android with App Store / Google Play submission.
We can manage most complex type of apps depending on your needs.

            </p>
          </div>
        </div>
      </div>
    )
}

export default Mobile
