function createEnemy () {
    EnemySprite = sprites.create(assets.image`packman`, SpriteKind.Player)
    animation.runImageAnimation(
    EnemySprite,
    assets.animation`Enemy`,
    200,
    true
    )
    tiles.placeOnRandomTile(EnemySprite, sprites.dungeon.collectibleRedCrystal)
    EnemySprite.follow(mySprite)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
let EnemySprite: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`packman`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 10))
createEnemy()
game.onUpdate(function () {
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
})
