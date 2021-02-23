import config from '../configs'

export const state = () => ({
  config: config('profile'),
})

export const getters = {
  manus: (state) => state.config.manus,
  projects: (state) => state.config.projects,
  social_accounts: (state) => state.config.social_accounts,
  // images: (state) => state.config.images || {},
  // links: (state) => state.config.links,
  // texts: (state) => state.config.texts,
   client_name: (state) => state.config.client_name,
  // client_logo: (state) => state.config.client_logo,
  // flags: (state) => state.config.flags,
  // homeButton: (state) => state.config.landingPageButton,
}
