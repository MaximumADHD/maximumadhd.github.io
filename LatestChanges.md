## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/92bddc972532ffcafaba8ae309b695a7d3b8a9a3

## API Changes

```plain
Added Class ExperienceInviteOptions : Instance [NotReplicated]
	Added Property int ExperienceInviteOptions.InviteMessageId
	Added Property int ExperienceInviteOptions.InviteUser
	Added Property string ExperienceInviteOptions.LaunchData
	Added Property string ExperienceInviteOptions.PromptMessage

Added Class CloudLocalizationTable : LocalizationTable [NotCreatable] [NotReplicated]

Added Property bool Animator.PreferLodEnabled
Added Property Enum.HorizontalAlignment ChatWindowConfiguration.HorizontalAlignment [<📁> LoadOnly] [NotReplicated] {🧬Unsafe}
Added Property Enum.VerticalAlignment ChatWindowConfiguration.VerticalAlignment [<📁> LoadOnly] [NotReplicated] {🧬Unsafe}
Added Property int DraggerService.HoverLineThickness {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property int Highlight.LineThickness {RobloxScriptSecurity} [Hidden]
Added Property Enum.ReservedHighlightId Highlight.ReservedId {RobloxScriptSecurity} [Hidden]
Added Property bool Humanoid.EvaluateStateMachine [NotBrowsable]
Added Property bool IncrementalPatchBuilder.HighCompression
Added Property bool IncrementalPatchBuilder.ZstdCompression
Added Property bool Player.UnfilteredChat {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property int Selection.SelectionLineThickness [Hidden] [ReadOnly]
Added Property int Studio.Hover Line Thickness {RobloxSecurity}
Added Property int Studio.Selection Line Thickness {RobloxSecurity}
Added Property Enum.TrackerExtrapolationFlagMode TrackerLodController.VideoExtrapolationMode

Added Function void ClientReplicator:RequestServerScriptProfiling(bool start) {RobloxScriptSecurity}
Added Function void RbxAnalyticsService:DEPRECATED_TrackEvent(string category, string action, string label, int64 value = 0) {RobloxScriptSecurity}
Added Function void RbxAnalyticsService:DEPRECATED_TrackEventWithArgs(string category, string action, string label, Dictionary args, int64 value = 0) {RobloxScriptSecurity}
Added Function Dictionary ScriptContext:DeserializeScriptProfilerString(string jsonString) {RobloxScriptSecurity} [CustomLuaState]
Added Function void ScriptContext:SaveScriptProfilingData(string filename) {RobloxScriptSecurity}
Added Function void TeleportService:Block() {RobloxScriptSecurity}
Added Function Tuple TeleportService:UnblockAsync() {RobloxScriptSecurity} [Yields]
Added Function int TrackerLodController:getExtrapolation() {RobloxScriptSecurity}
Added Function Array UGCValidationService:validateCageMeshIntersection(string innerCageMeshId, string outerCageMeshId, string refMeshId) {RobloxScriptSecurity} [Yields]
Added Function Array UGCValidationService:validateCageNonManifoldAndHoles(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:validateFullBodyCageDeletion(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:validateMisMatchUV(string innerCageMeshId, string outerCageMeshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:validateOverlappingVertices(string meshId) {RobloxScriptSecurity} [Yields]

Added Event AdService.AdTeleportEnded() {RobloxScriptSecurity}
Added Event AdService.AdTeleportInitiated() {RobloxScriptSecurity}

Added Enum ParticleFlipbookTextureCompatible
	Added EnumItem ParticleFlipbookTextureCompatible.NotCompatible : 0
	Added EnumItem ParticleFlipbookTextureCompatible.Compatible : 1
	Added EnumItem ParticleFlipbookTextureCompatible.Unknown : 2

Added Enum ReservedHighlightId
	Added EnumItem ReservedHighlightId.Standard : 0
	Added EnumItem ReservedHighlightId.Selection : 32
	Added EnumItem ReservedHighlightId.Hover : 64
	Added EnumItem ReservedHighlightId.Active : 128

Added Enum TrackerExtrapolationFlagMode
	Added EnumItem TrackerExtrapolationFlagMode.ForceDisabled : 0
	Added EnumItem TrackerExtrapolationFlagMode.ExtrapolateFacsAndPose : 1
	Added EnumItem TrackerExtrapolationFlagMode.ExtrapolateFacsOnly : 2
	Added EnumItem TrackerExtrapolationFlagMode.Auto : 3

Changed the return-type of Function ScriptContext:StopScriptProfiling 
	from: string
	  to: Dictionary

Changed the value of EnumItem DebuggerExceptionBreakMode.Always from 2 to 1
Changed the value of EnumItem DebuggerExceptionBreakMode.Unhandled from 1 to 2

Removed Function LocalizationService:SetExperienceSettingsLocaleId

Removed Tag [Deprecated] from Class AdService
Removed Tag [NotBrowsable] from Class WireframeHandleAdornment
Removed Tag [NotCreatable] from Class AdPortal
Removed Tag [NotScriptable] from Property AdPortal.PortalStatus
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#547) for a syntax highlighted version!)