## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/7d24950047ac96ccd3652b9a80e3cb44cc0a777b

## API Changes

```plain
Added Class AudioFocusService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function AudioFocusService:AcquireFocus(contextId: number, priority: number) -> boolean {RobloxScriptSecurity}
	Added Function AudioFocusService:RegisterContextIdFromLua(contextId: number) -> () {RobloxScriptSecurity}
	Added Function AudioFocusService:RequestFocus(contextId: number, priority: number) -> boolean {RobloxScriptSecurity}
	Added Event AudioFocusService.OnDeafenVoiceAudio() {RobloxScriptSecurity}
	Added Event AudioFocusService.OnUndeafenVoiceAudio() {RobloxScriptSecurity}

Added Class ChannelTabsConfiguration : TextChatConfigurations [NotCreatable]
	Added Property ChannelTabsConfiguration.BackgroundColor3: Color3
	Added Property ChannelTabsConfiguration.BackgroundTransparency: number
	Added Property ChannelTabsConfiguration.FontFace: Font
	Added Property ChannelTabsConfiguration.HoverBackgroundColor3: Color3
	Added Property ChannelTabsConfiguration.SelectedTabTextColor3: Color3
	Added Property ChannelTabsConfiguration.TextColor3: Color3
	Added Property ChannelTabsConfiguration.TextSize: number
	Added Property ChannelTabsConfiguration.TextStrokeColor3: Color3
	Added Property ChannelTabsConfiguration.TextStrokeTransparency: number
	Added Property ChannelTabsConfiguration.Enabled: boolean
	Added Property ChannelTabsConfiguration.AbsolutePosition: Vector2 [ReadOnly]
	Added Property ChannelTabsConfiguration.AbsoluteSize: Vector2 [ReadOnly]
	Added Function ChannelTabsConfiguration:SetAbsolutePosition(value: Vector2) -> () {RobloxScriptSecurity}
	Added Function ChannelTabsConfiguration:SetAbsoluteSize(value: Vector2) -> () {RobloxScriptSecurity}

Added Property AudioEqualizer.Editor: boolean {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property AudioFilter.Editor: boolean {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property BasePart.ReplicationPV: ReplicationPV {RobloxSecurity} [Hidden] [NotScriptable]
Added Property StudioService.ForceShowConstraintDetails: boolean {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property UIDragDetector.BoundingBehavior: Enum.UIDragDetectorBoundingBehavior

Added Function UGCValidationService:IsEditableMeshNumCoplanarIntersectionsOverLimit(editableMesh: EditableMesh, limit: number, meshScale: Vector3, intersectBackFaces: boolean) -> boolean {RobloxScriptSecurity}
Added Function UGCValidationService:IsNumCoplanarIntersectionsOverLimit(meshId: string, limit: number, meshScale: Vector3, intersectBackFaces: boolean) -> boolean {RobloxScriptSecurity} [Yields]

Added Event GuiService.OpenStyleEditor(styleBase: Instance) {RobloxScriptSecurity}
Added Event RibbonNotificationService.AllNotificationsReadFromRibbon() {RobloxScriptSecurity}
Added Event RibbonNotificationService.NotificationReadFromRibbon(newNotificationId: string) {RobloxScriptSecurity}

Added Enum SecurityCapability
	Added EnumItem SecurityCapability.RunClientScript : 0
	Added EnumItem SecurityCapability.RunServerScript : 1
	Added EnumItem SecurityCapability.AccessOutsideWrite : 2
	Added EnumItem SecurityCapability.AssetRequire : 3
	Added EnumItem SecurityCapability.LoadString : 4
	Added EnumItem SecurityCapability.ScriptGlobals : 5
	Added EnumItem SecurityCapability.CreateInstances : 6
	Added EnumItem SecurityCapability.Basic : 7
	Added EnumItem SecurityCapability.Audio : 8
	Added EnumItem SecurityCapability.DataStore : 9
	Added EnumItem SecurityCapability.Network : 10
	Added EnumItem SecurityCapability.Physics : 11

Added Enum UIDragDetectorBoundingBehavior
	Added EnumItem UIDragDetectorBoundingBehavior.Automatic : 0
	Added EnumItem UIDragDetectorBoundingBehavior.EntireObject : 1
	Added EnumItem UIDragDetectorBoundingBehavior.HitPoint : 2

Changed the security of Property Instance.Capabilities 
	from: {RobloxSecurity}
	  to: {RobloxScriptSecurity}

Changed the security of Property Instance.Sandboxed 
	from: {RobloxSecurity}
	  to: {RobloxScriptSecurity}

Removed Property BasePart.PhysicsCFrame
Removed Property BasePart.PhysicsLinearVelocity
Removed Property BasePart.PhysicsRotationalVelocity

Removed Tag [NotScriptable] from Property Instance.Capabilities
Removed Tag [NotScriptable] from Property Instance.Sandboxed
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#635) for a syntax highlighted version!)