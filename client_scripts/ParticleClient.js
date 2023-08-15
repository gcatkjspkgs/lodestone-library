const $WorldParticleBuilder = java('team.lodestar.lodestone.systems.particle.WorldParticleBuilder')
const $LodestoneParticleRegistry = java('team.lodestar.lodestone.setup.LodestoneParticleRegistry')
const $GenericParticleData = java('team.lodestar.lodestone.systems.particle.data.GenericParticleData')
const $ColorParticleData = java('team.lodestar.lodestone.systems.particle.data.ColorParticleData')
const $SimpleParticleOptions = java('team.lodestar.lodestone.systems.particle.SimpleParticleOptions')
const $LodestoneWorldParticleRenderType = java('team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticleRenderType')
const $Color = java('java.awt.Color')

onEvent('player.data_from_server.particle', event => {
    const { level, data } = event
    let type
    switch (data.type) {
        case 'WISP': {
            type = $LodestoneParticleRegistry.WISP_PARTICLE
            break
        };
        case 'SMOKE': {
            type = $LodestoneParticleRegistry.SMOKE_PARTICLE
            break
        };
        case 'SPARKLE': {
            type = $LodestoneParticleRegistry.SPARKLE_PARTICLE
            break
        };
        case 'TWINKLE': {
            type = $LodestoneParticleRegistry.TWINKLE_PARTICLE
            break
        };
        case 'STAR': {
            type = $LodestoneParticleRegistry.STAR_PARTICLE
            break
        }
    }
    const colorStart = data.colorStart
    const colorEnd = data.colorEnd
    $WorldParticleBuilder['create(net.minecraftforge.registries.RegistryObject)'](type)
        .setTransparencyData($GenericParticleData.create(data.transparencyStart, data.transparencyEnd).build())
        .setScaleData($GenericParticleData.create(data.scaleStart, data.scaleEnd).build())
        .setColorData($ColorParticleData.create($Color(colorStart[0] / 255, colorStart[1] / 255, colorStart[2] / 255), $Color(colorEnd[0] / 255, colorEnd[1] / 255, colorEnd[2] / 255)).build())
        .setLifetime(data.lifetime)
        .setRandomOffset(data.randomOffset)
        .addMotion(data.motionX, data.motionY, data.motionZ)
        .setRandomMotion(data.randomMotionX, data.randomMotionY, data.randomMotionZ)
        .setDiscardFunction($SimpleParticleOptions.ParticleDiscardFunctionType.INVISIBLE)
        .setRenderType($LodestoneWorldParticleRenderType.LUMITRANSPARENT)
        .repeat(level.minecraftLevel, data.x, data.y, data.z, data.count)
})