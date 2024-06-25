## Client Difference Log



## API Changes

```plain
Added Class UIDragDetectorService : Instance [NotCreatable] [Service] [NotReplicated]

Added Property BasePart.PhysicsCFrame: CFrame {RobloxSecurity} [Hidden] [NotScriptable]
Added Property BasePart.PhysicsLinearVelocity: Vector3 {RobloxSecurity} [Hidden] [NotScriptable]
Added Property BasePart.PhysicsRotationalVelocity: Vector3 {RobloxSecurity} [Hidden] [NotScriptable]
Added Property GetTextBoundsParams.RichText: boolean
Added Property UIDragDetector.ActivatedCursorIcon: Content
Added Property UIDragDetector.CursorIcon: Content
Added Property VisualizationMode.ToolTip: string {RobloxScriptSecurity}

Added Function VoiceChatService:joinVoice() -> () {RobloxScriptSecurity}

Added Tag [CustomLuaState] to Function Instance:GetAttributes
Added Tag [NotBrowsable] to Class UIDragDetector

Changed the security of Property Lighting.Technology 
	from: {None}
	  to: {RobloxScriptSecurity}

Removed Property ColorCorrectionEffect.TonemapperPreset

Removed Enum TonemapperPreset
	Removed EnumItem TonemapperPreset.Default
	Removed EnumItem TonemapperPreset.Retro

Removed Tag [NotScriptable] from Property Lighting.Technology
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#631) for a syntax highlighted version!)