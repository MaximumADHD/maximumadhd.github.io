## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/720d0edba10f2b2a4627ea39b53eaf18f85771c0

## API Changes

```plain
Added Class HeatmapService : Instance [NotCreatable] [Service]

Added Property EditableImage.IsReplicatedCopy: boolean {RobloxSecurity} [Hidden] [NotReplicated] [NotScriptable]
Added Property EditableMesh.IsReplicatedCopy: boolean {RobloxSecurity} [Hidden] [NotReplicated] [NotScriptable]
Added Property Motor.ReplicateCurrentAngle: number {RobloxSecurity} [Hidden] [NotScriptable]
Added Property Motor6D.ReplicateCurrentAngle6D: Vector3 {RobloxSecurity} [Hidden] [NotScriptable]
Added Property Motor6D.ReplicateCurrentOffset6D: Vector3 {RobloxSecurity} [Hidden] [NotScriptable]

Added Function AdGui:forwardStateToLuaUI() -> () {RobloxScriptSecurity}
Added Function DebuggerConnectionManager:GetAvailableConnection() -> DebuggerConnection {RobloxScriptSecurity}
Added Function MarketplaceService:GetUserSubscriptionDetailsInternalAsync(subscriptionId: string) -> { [string]: any } {RobloxScriptSecurity} [Yields]
Added Function MarketplaceService:PromptCancelSubscription(user: Player, subscriptionId: string) -> ()
Added Function TweenService:SmoothDamp(current: any, target: any, velocity: any, smoothTime: number, maxSpeed: number?, dt: number?) -> (any, any)
Added Function UGCValidationService:GetImageTransparencyWithByteString(textureId: string) -> number {RobloxScriptSecurity}
Added Function UGCValidationService:GetImageTransparencyWithTextureID(textureId: string) -> number {RobloxScriptSecurity} [Yields]

Added Event MarketplaceService.PromptCancelSubscriptionRequested(subscriptionId: string) {RobloxScriptSecurity}

Added Enum CloseReason
	Added EnumItem CloseReason.Unknown : 0
	Added EnumItem CloseReason.RobloxMaintenance : 1
	Added EnumItem CloseReason.DeveloperShutdown : 2
	Added EnumItem CloseReason.DeveloperUpdate : 3
	Added EnumItem CloseReason.ServerEmpty : 4
	Added EnumItem CloseReason.OutOfMemory : 5

Added Enum LocationType
	Added EnumItem LocationType.Character : 0
	Added EnumItem LocationType.Camera : 1
	Added EnumItem LocationType.ObjectPosition : 2

Added EnumItem SecurityCapability.UI : 12
Added EnumItem SecurityCapability.CSG : 13
Added EnumItem SecurityCapability.Chat : 14
Added EnumItem SecurityCapability.Animation : 15
Added EnumItem SecurityCapability.Avatar : 16

Changed the category of Property AudioReverb.LowShelfGain 
	from: "Data"
	  to: "State"

Changed the security of Function AudioEmitter:GetInteractingListeners 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function AudioListener:GetInteractingEmitters 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security and return-type of Function StreamingService:ExecuteCommandAsync 
	from: {RobloxScriptSecurity} ()
	  to: {LocalUserSecurity} any

Changed the parameters of Event AudioFocusService.OnDeafenVoiceAudio 
	from: ()
	  to: (contextId: number)

Changed the parameters of Event AudioFocusService.OnUndeafenVoiceAudio 
	from: ()
	  to: (contextId: number)

Removed Event PartOperation.MeshDeltaUpdate
Removed Event PartOperation.MeshFullUpdate
Removed Event PartOperation.RequestMeshFullUpdate

Removed Tag [NotBrowsable] from Class UIFlexItem
Removed Tag [NotBrowsable] from Function Humanoid:GetMoveVelocity
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#636) for a syntax highlighted version!)