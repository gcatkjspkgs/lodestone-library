# LodestoneJS

[![kjspkg-available](https://github-production-user-asset-6210df.s3.amazonaws.com/79367505/250114674-fb848719-d52e-471b-a6cf-2c0ea6729f1c.svg)](https://kjspkglookup.modernmodpacks.site/#lodestone-js)

## Example

```js
onEvent('level.explosion.post', event => {
    const { x, y, z, level } = event
    let count = 0
    event.affectedBlocks.forEach(block => {
        if (block.id == 'minecraft:air') return
        count++
    })
    let SmokeParticle = new Particle(event)
    SmokeParticle.colorData([0,0,0], [100,100,100])
    SmokeParticle.lifetime(count / 100 * 600)
    SmokeParticle.motion(0, 0.05, 0)
    SmokeParticle.position(x, y, z)
    SmokeParticle.randomMotion(0.05, 0.05, 0.05)
    SmokeParticle.randomOffset(count / 60)
    SmokeParticle.scaleData(0.5, 0)
    SmokeParticle.transparencyData(0.5, 0)
    SmokeParticle.type('SMOKE')
    SmokeParticle.spawn(count * 20)
})
```
