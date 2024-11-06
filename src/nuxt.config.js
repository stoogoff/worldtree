
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'server',

	env: {

	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'WorldTree',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'WorldTree dice roller' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/styles.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/api',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		{
			path: '~/components', // will get any components nested in let's say /components/test too
			pathPrefix: false,
		},
	],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	//serverMiddleware: [],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: process.env.API_SERVER,
	},

	googleFonts: {
		families: {
			'Lato': {
				wght: [400, 500]
			},
		},
		prefetch: true,
		preconnect: true,
		useStylesheet: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		cache: process.env.NODE_ENV !== 'production',
		extractCSS: process.env.NODE_ENV === 'production' ? { ignoreOrder: true } : false,
		optimizeCSS: process.env.NODE_ENV === 'production',
	},
}
