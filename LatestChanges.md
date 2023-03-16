## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/70b8bf0fba8cac6ea88161f40e8bed312af6c901

## API Changes

```plain
Added Class MeshDataExperimental : Instance [NotCreatable]
	Added Property Vector3 MeshDataExperimental.Size [ReadOnly]
	Added Function void MeshDataExperimental:PopulateFromMeshAsync(Content meshId) [Yields]

Added Property bool IncrementalPatchBuilder.SerializePatch
Added Property float Selection.SelectionBoxThickness {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property bool SelectionBox.StudioSelectionBox {RobloxScriptSecurity} [Hidden]
Added Property float Studio.Selection Box Thickness {RobloxSecurity}

Added Function Tuple AssetService:PromptPublishAssetAsync(Player player, Instance instance, Enum.AssetType assetType) [Yields]
Added Function void ContextActionService:BindCoreActivate(Enum.UserInputType userInputTypeForActivation, Tuple keyCodesForActivation) {RobloxScriptSecurity}
Added Function void ContextActionService:UnbindCoreActivate(Enum.UserInputType userInputTypeForActivation, Enum.KeyCode keyCodeForActivation = "Unknown") {RobloxScriptSecurity}
Added Function void ImageDataExperimental:Clear()
Added Function void ImageDataExperimental:DrawCircle(Vector2 center, int radius, Color3 color, float alpha)
Added Function void ImageDataExperimental:Resize(Vector2 newSize)
Added Function void ImageDataExperimental:Rotate(float degrees, bool resizeCanvas = true)
Added Function string InsertService:GetLocalFileContents(string contentId) {RobloxScriptSecurity}
Added Function double MaterialGenerationService:GetAccountingBalanceAsync() {RobloxScriptSecurity} [Yields]
Added Function double MaterialGenerationService:RefillAccountingBalanceAsync() {RobloxScriptSecurity} [Yields]
Added Function Dictionary MaterialGenerationSession:GenerateMaterialMapsAsync(string imageId) {RobloxScriptSecurity} [Yields]
Added Function Dictionary MaterialGenerationSession:UploadMaterialAsync(string imageId) {RobloxScriptSecurity} [Yields]
Added Function void ScriptEditorService:DeregisterScriptAnalysisCallback(string name) {PluginSecurity}
Added Function void ScriptEditorService:RegisterScriptAnalysisCallback(string name, int priority, Function callbackFunction) {PluginSecurity}
Added Function bool UGCValidationService:CanLoadAsset(string assetId) {RobloxScriptSecurity} [Yields]

Added Event Animator.OnStreamingUpdated(float fadeTime, float weight, Enum.AnimationPriority priority, int valuesUpdated) {RobloxSecurity} [Hidden]
Added Event AssetService.OpenPublishResultModal(Enum.PromptPublishAssetResult resultType) {RobloxScriptSecurity}
Added Event Players.PromptReportServerEnrichmentAndScan(string v1comment, int64 submitterId, int64 abuserId, string reportId) {RobloxSecurity} [Hidden]

Added Enum PromptPublishAssetResult
	Added EnumItem PromptPublishAssetResult.Success : 1
	Added EnumItem PromptPublishAssetResult.PermissionDenied : 2
	Added EnumItem PromptPublishAssetResult.Timeout : 3
	Added EnumItem PromptPublishAssetResult.UploadFailed : 4
	Added EnumItem PromptPublishAssetResult.NoUserInput : 5

Added Enum Severity
	Added EnumItem Severity.Error : 1
	Added EnumItem Severity.Warning : 2

Added Tags [Hidden] [NotScriptable] [Deprecated] to Property AdPortal.PortalType

Changed the security of Property Selection.SelectionLineThickness 
	from: {None}
	  to: {RobloxScriptSecurity}

Changed the return-type of Function MaterialGenerationSession:GenerateImagesAsync 
	from: Array
	  to: Tuple

Changed the thread safety of Function BasePart:GetNetworkOwner 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function BasePart:GetNetworkOwnershipAuto 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Players:GetPlayerByUserId 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Terrain:GetMaterialColor 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the parameters of Event TeamCreatePublishService.TeamCreateReplicatedMessage 
	from: (Enum.MessageType messageType, string message, bool printToStatusBar, int statusCode, bool isPublish, string authorName)
	  to: (Enum.MessageType messageType, string failureMessage, int statusCode, bool isPublish, string authorName)

Removed Function MaterialGenerationSession:GenerateMaterialAsync
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#567) for a syntax highlighted version!)