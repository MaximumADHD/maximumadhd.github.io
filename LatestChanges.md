## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/d26723719589058955bc492c8c5a57fb07b57193

## API Changes

```plain
Added Property string DataStoreKeyPages.Cursor [ReadOnly]
Added Property string DataStoreListingPages.Cursor [ReadOnly]
Added Property CFrame IKControl.AlignmentOffset
Added Property Instance IKControl.Pole
Added Property Enum.ModelStreamingMode Model.ModelStreamingMode
Added Property bool Studio.File > New creates a place with Team Create off

Added Function void DebuggerUIService:SetCurrentFrameId(int debuggerThreadId, int debuggerFrameId) {RobloxScriptSecurity}
Added Function void Fire:FastForward(int numFrames) {RobloxScriptSecurity}
Added Function Dictionary IXPService:GetRegisteredUserLayersToStatus() {LocalUserSecurity}
Added Function void Smoke:FastForward(int numFrames) {RobloxScriptSecurity}
Added Function void Sparkles:FastForward(int numFrames) {RobloxScriptSecurity}
Added Function void TeamCreateService:SendUnarchiveUniverseAsync(int64 universeId) {RobloxScriptSecurity}
Added Function Tuple UGCValidationService:ValidateCageMeshIntersection(string innerCageMeshId, string outerCageMeshId, string refMeshId) {RobloxScriptSecurity} [Yields]
Added Function Tuple UGCValidationService:ValidateCageNonManifoldAndHoles(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateFullBodyCageDeletion(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateMisMatchUV(string innerCageMeshId, string outerCageMeshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateOverlappingVertices(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool VRService:IsMaquettes() {RobloxScriptSecurity}
Added Function bool VRService:IsVRAppBuild() {RobloxScriptSecurity}

Added Event Workspace.PersistentLoaded(Player player)

Added Enum ModelStreamingMode
	Added EnumItem ModelStreamingMode.Default : 0
	Added EnumItem ModelStreamingMode.Atomic : 1

Added EnumItem CoreGuiType.SelfView : 6
Added EnumItem StreamingIntegrityMode.PauseOutsideLoadedArea : 3

Added Tag [Deprecated] to Enum StreamingPauseMode
	Added Tag [Deprecated] to EnumItem StreamingPauseMode.Default
	Added Tag [Deprecated] to EnumItem StreamingPauseMode.Disabled
	Added Tag [Deprecated] to EnumItem StreamingPauseMode.ClientPhysicsPause

Changed the parameters of Function DataStore:ListKeysAsync 
	from: (string prefix = "", int pageSize = 0)
	  to: (string prefix = "", int pageSize = 0, string cursor = "")

Changed the parameters of Function DataStoreService:ListDataStoresAsync 
	from: (string prefix = "", int pageSize = 0)
	  to: (string prefix = "", int pageSize = 0, string cursor = "")

Changed the parameters of Event RunService.PostSimulation 
	from: (double deltaTime)
	  to: (double deltaTimeSim)

Changed the parameters of Event RunService.PreAnimation 
	from: (double deltaTime)
	  to: (double deltaTimeSim)

Changed the parameters of Event RunService.PreRender 
	from: (double deltaTime)
	  to: (double deltaTimeRender)

Changed the parameters of Event RunService.PreSimulation 
	from: (double deltaTime)
	  to: (double deltaTimeSim)

Removed Property Workspace.StreamingPauseMode

Removed Function UGCValidationService:validateCageMeshIntersection
Removed Function UGCValidationService:validateCageNonManifoldAndHoles
Removed Function UGCValidationService:validateFullBodyCageDeletion
Removed Function UGCValidationService:validateMisMatchUV
Removed Function UGCValidationService:validateOverlappingVertices
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#548) for a syntax highlighted version!)