## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/4f4545ce37d4c1355ce16f07abdaab721233b797

## API Changes

```plain
Added Class TeamCreateService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Event TeamCreateService.ToggleManageCollaborators() {RobloxScriptSecurity}

Added Property float Studio.Camera Pan Speed {RobloxScriptSecurity}

Added LegacyName "TeeShirt" to EnumItem AccessoryType.TShirt
Added LegacyName "TeeShirt" to EnumItem AssetType.TShirt
Added LegacyName "TeeShirtAccessory" to EnumItem AssetType.TShirtAccessory
Added LegacyName "TeeShirtAccessory" to EnumItem AvatarAssetType.TShirtAccessory
Added LegacyName "Left" to EnumItem Axis.X
Added LegacyName "Right" to EnumItem Axis.X
Added LegacyName "Bottom" to EnumItem Axis.Y
Added LegacyName "Top" to EnumItem Axis.Y
Added LegacyName "Back" to EnumItem Axis.Z
Added LegacyName "Front" to EnumItem Axis.Z
Added LegacyName "Laser" to EnumItem BinType.Script
Added LegacyName "Rocket" to EnumItem BinType.Script
Added LegacyName "Slingshot" to EnumItem BinType.Script
Added LegacyName "Default" to EnumItem ContextActionPriority.Medium
Added LegacyName "Medium" to EnumItem ContextActionPriority.Default
Added LegacyName "Mouse Lock Switch" to EnumItem ControlMode.MouseLockSwitch
Added LegacyName "CratersAndDebris" to EnumItem ExplosionType.Craters
Added LegacyName "GothamSemibold" to EnumItem Font.GothamMedium
Added LegacyName "Block" to EnumItem FormFactor.Brick
Added LegacyName "Action1" to EnumItem InputType.NoInput
Added LegacyName "Action2" to EnumItem InputType.NoInput
Added LegacyName "Action3" to EnumItem InputType.NoInput
Added LegacyName "Action4" to EnumItem InputType.NoInput
Added LegacyName "Action5" to EnumItem InputType.NoInput
Added LegacyName "LeftTread" to EnumItem InputType.NoInput
Added LegacyName "RightTread" to EnumItem InputType.NoInput
Added LegacyName "Steer" to EnumItem InputType.NoInput
Added LegacyName "Throtle" to EnumItem InputType.NoInput
Added LegacyName "Throttle" to EnumItem InputType.NoInput
Added LegacyName "UpDown" to EnumItem InputType.NoInput
Added LegacyName "Corroded Metal" to EnumItem Material.CorrodedMetal
Added LegacyName "Aluminum" to EnumItem Material.Foil
Added LegacyName "Level  1" to EnumItem QualityLevel.Level01
Added LegacyName "Level  2" to EnumItem QualityLevel.Level02
Added LegacyName "Level  3" to EnumItem QualityLevel.Level03
Added LegacyName "Level  4" to EnumItem QualityLevel.Level04
Added LegacyName "Level  5" to EnumItem QualityLevel.Level05
Added LegacyName "Level  6" to EnumItem QualityLevel.Level06
Added LegacyName "Level  7" to EnumItem QualityLevel.Level07
Added LegacyName "Level  8" to EnumItem QualityLevel.Level08
Added LegacyName "Level  9" to EnumItem QualityLevel.Level09
Added LegacyName "Level 10" to EnumItem QualityLevel.Level10
Added LegacyName "Level 11" to EnumItem QualityLevel.Level11
Added LegacyName "Level 12" to EnumItem QualityLevel.Level12
Added LegacyName "Level 13" to EnumItem QualityLevel.Level13
Added LegacyName "Level 14" to EnumItem QualityLevel.Level14
Added LegacyName "Level 15" to EnumItem QualityLevel.Level15
Added LegacyName "Level 16" to EnumItem QualityLevel.Level16
Added LegacyName "Level 17" to EnumItem QualityLevel.Level17
Added LegacyName "Level 18" to EnumItem QualityLevel.Level18
Added LegacyName "Level 19" to EnumItem QualityLevel.Level19
Added LegacyName "Level 20" to EnumItem QualityLevel.Level20
Added LegacyName "Level 21" to EnumItem QualityLevel.Level21
Added LegacyName "Alternating Supports" to EnumItem Style.AlternatingSupports
Added LegacyName "Bridge Style Supports" to EnumItem Style.BridgeStyleSupports
Added LegacyName "No Supports" to EnumItem Style.NoSupports
Added LegacyName "Spawn" to EnumItem SurfaceType.Smooth
Added LegacyName "Unjoinable" to EnumItem SurfaceType.Smooth
Added LegacyName "Bumps" to EnumItem SurfaceType.Glue
Added LegacyName "PartialThread" to EnumItem ThreadPoolConfig.Auto

Changed the parameters of Function ScriptDocument:EditTextAsync 
	from: (string newText, int startLine, int startCharacter, int endLine = -1, int endCharacter = -1)
	  to: (string newText, int startLine, int startCharacter, int endLine, int endCharacter)

Changed the thread safety of Function Players:GetPlayers 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Team:GetPlayers 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Removed Property RigidConstraint.Broken
Removed Property RigidConstraint.DestructionEnabled
Removed Property RigidConstraint.DestructionForce
Removed Property RigidConstraint.DestructionTorque

Removed Tag [NotBrowsable] from Class FaceControls
Removed Tag [NotBrowsable] from Class MaterialService
Removed Tag [NotBrowsable] from Class MaterialVariant
Removed Tag [NotBrowsable] from Class PathfindingLink
Removed Tag [NotBrowsable] from Class TerrainDetail
Removed Tag [NotBrowsable] from Class TextChannel
Removed Tag [NotBrowsable] from Class TextChatCommand
Removed Tag [NotBrowsable] from Class TextChatService
Removed Tag [NotBrowsable] from Class TextSource
Removed Tag [NotBrowsable] from Class ChatInputBarConfiguration
Removed Tag [NotBrowsable] from Class ChatWindowConfiguration
Removed Tag [NotBrowsable] from EnumItem Material.Basalt
Removed Tag [NotBrowsable] from EnumItem Material.CrackedLava
Removed Tag [NotBrowsable] from EnumItem Material.Limestone
Removed Tag [NotBrowsable] from EnumItem Material.Pavement
Removed Tag [NotBrowsable] from EnumItem Material.Rock
Removed Tag [NotBrowsable] from EnumItem Material.Sandstone
Removed Tag [NotBrowsable] from EnumItem Material.LeafyGrass
Removed Tag [NotBrowsable] from EnumItem Material.Snow
Removed Tag [NotBrowsable] from EnumItem Material.Mud
Removed Tag [NotBrowsable] from EnumItem Material.Ground
Removed Tag [NotBrowsable] from EnumItem Material.Asphalt
Removed Tag [NotBrowsable] from EnumItem Material.Salt
Removed Tag [NotBrowsable] from EnumItem Material.Glacier
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#533) for a syntax highlighted version!)