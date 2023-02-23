## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/68e83985f9fcd6fa0a9b4088ea0733fb382de615

## API Changes

```plain
Added Class ImageDataExperimental : Instance [NotCreatable]
	Added Property Vector2 ImageDataExperimental.Size
	Added Property Content ImageDataExperimental.TemporaryId [ReadOnly]
	Added Function void ImageDataExperimental:PopulateFromImageAsync(Content textureId) [Yields]

Added Class PatchBundlerFileWatch : Instance [NotCreatable] [Service] [NotReplicated]

Added Class SharedTableRegistry : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function SharedTable SharedTableRegistry:GetSharedTable(string name) {🧬Safe}
	Added Function void SharedTableRegistry:SetSharedTable(string name, SharedTable? st) {🧬Safe}

Added Class SyncScriptBuilder : ScriptBuilder [NotCreatable] [NotReplicated]
	Added Property bool SyncScriptBuilder.CoverageInfo
	Added Property bool SyncScriptBuilder.DebugInfo
	Added Property bool SyncScriptBuilder.PackAsSource
	Added Property bool SyncScriptBuilder.RawBytecode

Added Class TextureGuiExperimental : LayerCollector [NotCreatable]
	Added Property Vector2 TextureGuiExperimental.Size
	Added Property Content TextureGuiExperimental.TemporaryId [ReadOnly]

Added Class IntersectOperation : PartOperation

Added Property Enum.RigScale ImporterRootSettings.RigScale
Added Property bool ImporterRootSettings.UseSceneOriginAsCFrame
Added Property Enum.ServiceVisibility ReflectionMetadataClass.ServiceVisibility {RobloxSecurity} [Hidden] [NotReplicated]
Added Property Enum.RtlTextSupport StarterGui.RtlTextSupport [NotScriptable]

Added Function bool AssetImportSession:IsR15() {RobloxScriptSecurity}
Added Function Instance BasePart:IntersectAsync(Objects parts, Enum.CollisionFidelity collisionfidelity = "Default", Enum.RenderFidelity renderFidelity = "Automatic") [Yields]
Added Function Enum.AssetFetchStatus ContentProvider:GetAssetFetchStatus(Content contentId)
Added Function RBXScriptSignal ContentProvider:GetAssetFetchStatusChangedSignal(Content contentId)

Added Enum AvatarThumbnailCustomizationType
	Added EnumItem AvatarThumbnailCustomizationType.Closeup : 1
	Added EnumItem AvatarThumbnailCustomizationType.FullBody : 2

Added Enum RigScale
	Added EnumItem RigScale.Default : 0
	Added EnumItem RigScale.Rthro : 1
	Added EnumItem RigScale.RthroNarrow : 2

Added Enum RtlTextSupport
	Added EnumItem RtlTextSupport.Default : 0
	Added EnumItem RtlTextSupport.Disabled : 1
	Added EnumItem RtlTextSupport.Enabled : 2

Added Enum ServiceVisibility
	Added EnumItem ServiceVisibility.Always : 0
	Added EnumItem ServiceVisibility.Off : 1
	Added EnumItem ServiceVisibility.WithChildren : 2

Added EnumItem AssetFetchStatus.None : 2
Added EnumItem AssetFetchStatus.Loading : 3
Added EnumItem AssetFetchStatus.TimedOut : 4

Added Tag [Deprecated] to Function BasePart:BreakJoints
Added Tag [Deprecated] to Function BasePart:MakeJoints
Added Tag [Deprecated] to Function Model:BreakJoints
Added Tag [Deprecated] to Function Model:MakeJoints
Added Tag [Deprecated] to Function Workspace:BreakJoints
Added Tag [Deprecated] to Function Workspace:MakeJoints

Changed the memory category of Class HopperBin 
	from: "Instances"
	  to: "PhysicsParts"

Changed the memory category of Class Tool 
	from: "Instances"
	  to: "PhysicsParts"

Changed the memory category of Class Flag 
	from: "Instances"
	  to: "PhysicsParts"

Changed the superclass and memory category of Class BackpackItem 
	from: "Instance" "Instances"
	  to: "Model" "PhysicsParts"

Changed the parameters of Function AvatarEditorService:NoPromptSaveAvatarThumbnailCustomization 
	from: (int thumbnailType, int64 emoteAssetId, float cameraDistanceScale, float yRotDeg, float fieldOfViewDeg = 0)
	  to: (Enum.AvatarThumbnailCustomizationType thumbnailType, int64 emoteAssetId, float cameraDistanceScale, float yRotDeg, float fieldOfViewDeg = 0)

Changed the parameters of Function DataStore:ListKeysAsync 
	from: (string prefix = "", int pageSize = 0, string cursor = "")
	  to: (string prefix = "", int pageSize = 0, string cursor = "", bool excludeDeleted = false)

Removed Class DynamicTextureAlpha
	Removed Function DynamicTextureAlpha:CreateLayer

Removed Class DynamicTextureLayerAlpha
	Removed Property DynamicTextureLayerAlpha.ZIndex

Removed Property AirController.CancelAirMomentum
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#564) for a syntax highlighted version!)