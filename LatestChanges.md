## Client Difference Log



## API Changes

```plain
Added Class CloudCRUDService : Instance [NotCreatable] [Service] [NotReplicated]

Added Property Animator.FacsReplicationData: FacsReplicationData {RobloxSecurity} [Hidden] [NotScriptable]
Added Property AudioAnalyzer.SpectrumEnabled: boolean
Added Property CanvasGroup.ResolutionScale: number {RobloxScriptSecurity}

Added Function AnalyticsService:LogCustomEvent(player: Player, eventName: string, value: number? = 1, customFields: { [string]: any }? = nil) -> ()
Added Function Animator:LoadStreamAnimationV2(animation: TrackerStreamAnimation, player: Player? = nil, shouldLookupPlayer: boolean? = true, shouldReplicate: boolean? = true) -> AnimationStreamTrack {RobloxScriptSecurity}
Added Function AppLifecycleObserverService:GetCurrentState() -> Enum.AppLifecycleManagerState {RobloxScriptSecurity}
Added Function MaterialGenerationService:DEPRECATED_UploadMaterialVariantsAsync(materialVaraints: { Instance }) -> () {RobloxScriptSecurity} [Yields]
Added Function PublishService:CreateAssetOrAssetVersionAndPollAssetWithTelemetryAsyncWithAddParam(serializedInstance: string, publishInfo: { [string]: any }) -> { [string]: any } {RobloxScriptSecurity} [Yields]
Added Function StylingService:UpdateUnitTestOnly() -> () {RobloxScriptSecurity}
Added Function UGCValidationService:GetEditableMeshMaxNearbyVerticesCollisions(editableMesh: EditableMesh, meshScale: Vector3) -> number {RobloxScriptSecurity}
Added Function UGCValidationService:GetMaxNearbyVerticesCollisions(meshId: string, meshScale: Vector3) -> number {RobloxScriptSecurity} [Yields]

Added Enum AppLifecycleManagerState
	Added EnumItem AppLifecycleManagerState.Detached : 0
	Added EnumItem AppLifecycleManagerState.Active : 1
	Added EnumItem AppLifecycleManagerState.Inactive : 2
	Added EnumItem AppLifecycleManagerState.Hidden : 3

Added EnumItem AdUIEventType.WhyThisAdClicked : 6

Added Tag [CustomLuaState] to Function CollectionService:AddTag
Added Tag [CustomLuaState] to Function CollectionService:GetTags
Added Tag [CustomLuaState] to Function CollectionService:HasTag
Added Tag [CustomLuaState] to Function CollectionService:RemoveTag
Added Tag [Deprecated] to Property UserInputService.LegacyInputEventsEnabled

Changed the return-type of Function AudioAnalyzer:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioChorus:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioCompressor:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioDeviceInput:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioDeviceOutput:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioDistortion:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioEcho:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioEmitter:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioEmitter:GetInteractingListeners 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioEqualizer:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioFader:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioFilter:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioFlanger:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioListener:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioListener:GetInteractingEmitters 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioPitchShifter:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioPlayer:GetConnectedWires 
	from: { any }
	  to: { Instance }

Changed the return-type of Function AudioReverb:GetConnectedWires 
	from: { any }
	  to: { Instance }

Removed Class EngineAPICloudProcessingService

Removed Property AnimationRigData.articulatedJoint
Removed Property Studio.Auto-Recovery Path

Removed Function AssetImportSession:ApplySettings
Removed Function MaterialGenerationService:UploadMaterialVariantsAsync
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#637) for a syntax highlighted version!)