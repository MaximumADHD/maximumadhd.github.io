## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/bebc8edeec3c49787095f07a3ec4bd4a524b5ad9

## API Changes

```plain
Added Class Noise : Instance [NotReplicated]
	Added Property Noise.NoiseType: Enum.NoiseType {RobloxScriptSecurity}
	Added Property Noise.Seed: number {RobloxScriptSecurity}
	Added Function Noise:SampleDirectional(position: Vector3, direction: Vector3) -> number {RobloxScriptSecurity}
	Added Function Noise:SampleUniform(position: Vector3) -> number {RobloxScriptSecurity}

Added Class TextureGenerationPartGroup : Instance [NotCreatable] [NotReplicated]
	Added Function TextureGenerationPartGroup:GetInstances() -> { Instance } {RobloxScriptSecurity}
	Added Function TextureGenerationPartGroup:GetMeshIdsHash() -> string {RobloxScriptSecurity}

Added Property Studio.LoadAllBuiltinPluginsInRunModes: boolean {RobloxScriptSecurity}
Added Property Studio.LoadUserPluginsInRunModes: boolean {RobloxScriptSecurity}

Added Function MarketplaceService:GetUserSubscriptionDetailsAsync(user: Player, subscriptionId: string) -> { [string]: any } [Yields]
Added Function Path2D:GetLength() -> number {RobloxScriptSecurity}
Added Function PublishService:CreateAssetOrAssetVersionAndPollAssetWithTelemetryAsync(serializedInstance: string, creatorType: Enum.AssetCreatorType, creatorId: number, assetType: string, assetId: number, name: string, description: string, token: string, contentType: string, expectedPrice: number? = 0) -> { [string]: any } {RobloxScriptSecurity} [Yields]

Added Event AssetService.AudioMetadataFailedResponse(requestid: number) {RobloxScriptSecurity}
Added Event AssetService.AudioMetadataRequest(requestid: number, request: { any }) {RobloxScriptSecurity}
Added Event AssetService.AudioMetadataResponse(requestid: number, response: { any }) {RobloxScriptSecurity}
Added Event RemoteEvent.OnRemoteServerEvent(arguments: ...any) {RobloxSecurity} [Hidden]
Added Event UnreliableRemoteEvent.OnRemoteServerEvent(arguments: ...any) {RobloxSecurity} [Hidden]

Added Enum NoiseType
	Added EnumItem NoiseType.SimplexGabor : 0

Added Enum SubscriptionExpirationReason
	Added EnumItem SubscriptionExpirationReason.ProductInactive : 0
	Added EnumItem SubscriptionExpirationReason.ProductDeleted : 1
	Added EnumItem SubscriptionExpirationReason.SubscriberCancelled : 2
	Added EnumItem SubscriptionExpirationReason.SubscriberRefunded : 3
	Added EnumItem SubscriptionExpirationReason.Lapsed : 4

Added Enum SubscriptionState
	Added EnumItem SubscriptionState.NeverSubscribed : 0
	Added EnumItem SubscriptionState.SubscribedWillRenew : 1
	Added EnumItem SubscriptionState.SubscribedWillNotRenew : 2
	Added EnumItem SubscriptionState.SubscribedRenewalPaymentPending : 3
	Added EnumItem SubscriptionState.Expired : 4

Added EnumItem StudioCloseMode.LogOut : 3
Added EnumItem StudioStyleGuideColor.BreakpointMarker : 136

Added Tag [Deprecated] to Property BaseScript.LinkedSource
Added Tag [Deprecated] to Property ModuleScript.LinkedSource
Added Tag [NotReplicated] to Property VRService.QuestASWState
Added Tag [NotReplicated] to Property VRService.QuestDisplayRefreshRate

Changed the security of Property Path2D.Thickness 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the serialization of Property VRService.DidPointerHit 
	from: [💾 SaveOnly]
	  to: [🚫 None]

Changed the serialization of Property VRService.LaserDistance 
	from: [💾 SaveOnly]
	  to: [🚫 None]

Changed the serialization of Property VRService.PointerHitCFrame 
	from: [💾 SaveOnly]
	  to: [🚫 None]

Changed the serialization of Property VRService.VRDeviceAvailable 
	from: [💾 SaveOnly]
	  to: [🚫 None]

Changed the serialization of Property VRService.VREnabled 
	from: [💾 SaveOnly]
	  to: [🚫 None]

Removed Class TextureGenerationMeshHandler
	Removed Function TextureGenerationMeshHandler:PrepareInstancesForTexturingAsync

Removed Enum TextureGenerationMeshHandlerUnwrapMode
	Removed EnumItem TextureGenerationMeshHandlerUnwrapMode.Never
	Removed EnumItem TextureGenerationMeshHandlerUnwrapMode.Always
	Removed EnumItem TextureGenerationMeshHandlerUnwrapMode.WhenInvalidUVsDetected

Removed Tag [NotBrowsable] from Class Path2D
Removed Tag [NotReplicated] from Property VRService.AutomaticScaling
Removed Tag [NotReplicated] from Property VRService.FadeOutViewOnCollision
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#614) for a syntax highlighted version!)