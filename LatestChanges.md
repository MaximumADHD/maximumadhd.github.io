## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/2bc0a89a5073a9a0e4d492815303e999e36a0d50

## API Changes

```plain
Added Class ExampleService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function ExampleService:PrintHello() -> () {RobloxScriptSecurity}
	Added Event ExampleService.OnPolo(message: string) {RobloxScriptSecurity}

Added Property PartOperation.ManifoldMesh: SharedString {RobloxSecurity} [Hidden] [NotReplicated] [NotScriptable]
Added Property PhysicsSettings.ShowInstanceNamesForDrawnForcesAndTorques: boolean {RobloxScriptSecurity}

Added Function ExperienceStateCaptureService:CanEnterCaptureMode() -> boolean {RobloxScriptSecurity}
Added Function MarketplaceService:PerformSubscriptionPurchaseV2(subscriptionId: string, paymentProvider: string) -> () {RobloxScriptSecurity} [Yields]

Added Event AvatarCreationService.ReplicateAvatarTempAssetIds(serializedModel: string, bufferMap: { [string]: any }) {RobloxSecurity} [Hidden]
Added Event MarketplaceService.PromptCollectibleBundlePurchaseRequested(player: Instance, bundleId: number, collectibleItemId: string, collectibleItemInstanceId: string, collectibleProductId: string, expectedPrice: number, idempotencyKey: string, purchaseAuthToken: string) {RobloxScriptSecurity}

Changed the parameters of Function StudioPublishService:PublishAs 
	from: (universeId: number, placeId: number, groupId: number, isPublish: boolean, publishParameters: any, willRetryOnConflict: boolean? = false)
	  to: (universeId: number, placeId: number, groupId: number, isPublish: boolean, publishParameters: any, willRetryOnConflict: boolean? = false, allowOpeningNewPlace: boolean? = true)

Changed the security of Function AudioAnalyzer:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioChorus:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioCompressor:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioDeviceInput:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioDeviceOutput:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioDistortion:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioEcho:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioEmitter:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioEqualizer:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioFader:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioFlanger:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioListener:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioPitchShifter:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioPlayer:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}

Changed the security of Function AudioReverb:GetConnectedWires 
	from: {PluginSecurity}
	  to: {None}
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#618) for a syntax highlighted version!)