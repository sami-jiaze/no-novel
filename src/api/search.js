import liu from '@/utils/liu.js'

export const searchapi = function(p) {
  return liu.get('/v1_0/suggestion', {
    params: {
      p
    }
  })
}