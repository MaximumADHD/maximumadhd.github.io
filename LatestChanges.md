## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/54d23909e13709fbf926f3fe5c6ecd9dbb1cee2b

## API Changes

```plain
Added Class RobloxEditableMesh : EditableMesh
	Added Property RobloxEditableMesh.MeshDataSerialize: BinaryString {RobloxSecurity} [Hidden] [NotReplicated] [NotScriptable]

Added Property RenderingTest.QualityAuto: boolean
Added Property UserGameSettings.QualityResetLevel: number {RobloxScriptSecurity} [Hidden]
Added Property Workspace.DecreaseMinimumPartDensityMode: Enum.DecreaseMinimumPartDensityMode [NotScriptable]

Added Function CaptureService:GetCaptureStorageSizeAsync(pathArr: { any }) -> number {RobloxScriptSecurity} [Yields]
Added Function ConversationalAIAcceptanceService:RecordingActionEnded(requestId: string, waypointName: string) -> () {RobloxScriptSecurity}
Added Function ProjectFolderService:ExportScripts(path: string) -> () {RobloxScriptSecurity} [Yields]
Added Function ProjectFolderService:ImportScripts(path: string) -> () {RobloxScriptSecurity} [Yields]
Added Function ProjectFolderService:SelectFolder() -> string {RobloxScriptSecurity} [Yields]
Added Function StudioAssetService:DEPRECATED_SerializeInstances(instances: { Instance }) -> string {RobloxScriptSecurity} [Yields]
Added Function StudioAssetService:UpdatePublishedPackage(assetmetadata: { [string]: any }, rootInstance: Instance, isConvert: boolean? = false, addUndoWaypoint: boolean? = false) -> () {RobloxScriptSecurity}

Added Event AdService.ShowDynamicEudsaDisclosure(advertiserName: string, payerName: string) {RobloxScriptSecurity}
Added Event Animator.OnCombinedUpdate(animation: string, playState: boolean, fadeTime: number, weight: number, speed: number, timePosition: number, priority: Enum.AnimationPriority, looping: boolean, valuesUpdated: number) {RobloxSecurity} [Hidden]

Added Enum DecreaseMinimumPartDensityMode
	Added EnumItem DecreaseMinimumPartDensityMode.Default : 0
	Added EnumItem DecreaseMinimumPartDensityMode.Disabled : 1
	Added EnumItem DecreaseMinimumPartDensityMode.Enabled : 2

Added EnumItem AdEventType.RewardedAdLoaded : 3
Added EnumItem AdEventType.RewardedAdGrant : 4
Added EnumItem AdEventType.RewardedAdUnloaded : 5
Added EnumItem AvatarChatServiceFeature.UserVerifiedForVoice : 512
Added EnumItem StudioStyleGuideColor.DiffLineNumHover : 137
Added EnumItem StudioStyleGuideColor.DiffLineNumSeparatorBackgroundHover : 138

Added Tag [Deprecated] to EnumItem AdEventType.VideoLoaded
Added Tag [Deprecated] to EnumItem AdEventType.VideoRemoved
Added Tag [Deprecated] to EnumItem AdEventType.UserCompletedVideo

Added Tags [Deprecated] [Hidden] [NotReplicated] to Property Workspace.InterpolationThrottling

Changed the serialization of Property Workspace.InterpolationThrottling 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the parameters of Function StudioAssetService:SerializeInstances 
	from: (instances: { Instance })
	  to: (instances: { Instance }, groupId: number? = 0, isPackage: boolean? = false)

Changed the return-type of Function PluginToolbar:CreateButton 
	from: Instance?
	  to: PluginToolbarButton

Changed the return-type of Function PluginToolbar:CreatePopupButton 
	from: Instance?
	  to: PluginToolbarButton

Changed the security of Function UGCValidationService:CompareTextureOverlapByteString 
	from: {None}
	  to: {RobloxScriptSecurity}
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#617) for a syntax highlighted version!)