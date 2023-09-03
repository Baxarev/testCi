export default function getHealtStatus(obj) {
  return obj.health > 50 ? 'healthy' : obj.health < 15 ? 'critical' : 'wounded'
}
