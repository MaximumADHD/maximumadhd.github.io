## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/c3bb4f6fae4749401fbcaefa8a07f22e75543a96

## API Changes

```plain
Added Class AssetImportSession : Instance [NotCreatable] [NotReplicated]
	Added Function void AssetImportSession:Cancel() {RobloxScriptSecurity}
	Added Function Dictionary AssetImportSession:GetCurrentImportMap() {RobloxScriptSecurity}
	Added Function Dictionary AssetImportSession:GetCurrentStatusTable() {RobloxScriptSecurity}
	Added Function string AssetImportSession:GetFilename() {RobloxScriptSecurity}
	Added Function Instance AssetImportSession:GetSettingsRoot() {RobloxScriptSecurity}
	Added Function bool AssetImportSession:IsAvatar() {RobloxScriptSecurity}
	Added Function void AssetImportSession:Upload() {RobloxScriptSecurity}
	Added Event AssetImportSession.UploadComplete(bool succeeded, Dictionary errorMap)
	Added Event AssetImportSession.UploadProgress(float progressRatio)

Added Property Enum.RunContext BaseScript.RunContext {PluginSecurity}

Added Function AssetImportSession AssetImportService:StartSessionWithPrompt() {RobloxScriptSecurity} [Yields]
Added Function void LocalizationService:SetExperienceSettingsLocaleId(string locale) {RobloxScriptSecurity}
Added Function Tuple ScriptDocument:GetSelection() {PluginSecurity}
Added Function void StudioPublishService:ClearUploadNames() {RobloxScriptSecurity}

Added Event ScriptDocument.SelectionChanged(int64 positionLine, int64 positionCharacter, int64 anchorLine, int64 anchorCharacter) {PluginSecurity}
Added Event StudioPublishService.GamePublishCancelled() {RobloxScriptSecurity}

Added Enum RunContext
	Added EnumItem RunContext.Legacy : 0
	Added EnumItem RunContext.Server : 1
	Added EnumItem RunContext.Client : 2
	Added EnumItem RunContext.Plugin : 3

Added EnumItem WrapLayerDebugMode.LayerCageFittedToBase : 12
Added EnumItem WrapLayerDebugMode.LayerCageFittedToPrev : 13

Added LegacyName "Default" to EnumItem ContextActionPriority.Medium

Removed EnumItem ContextActionPriority.Default

Removed Tag [NotBrowsable] from Class MaterialService
Removed Tag [NotBrowsable] from Class MaterialVariant
Removed Tag [NotBrowsable] from Class TerrainDetail
Removed Tag [NotBrowsable] from EnumItem Material.Basalt
Removed Tag [NotBrowsable] from EnumItem Material.CrackedLava
Removed Tag [NotBrowsable] from EnumItem Material.Limestone
Removed Tag [NotBrowsable] from EnumItem Material.Pavement
Removed Tag [NotBrowsable] from EnumItem Material.Rock
Removed Tag [NotBrowsable] from EnumItem Material.Sandstone
Removed Tag [NotBrowsable] from EnumItem Material.LeafyGrass
Removed Tag [NotBrowsable] from EnumItem Material.Snow
Removed Tag [NotBrowsable] from EnumItem Material.Mud
Removed Tag [NotBrowsable] from EnumItem Material.Ground
Removed Tag [NotBrowsable] from EnumItem Material.Asphalt
Removed Tag [NotBrowsable] from EnumItem Material.Salt
Removed Tag [NotBrowsable] from EnumItem Material.Glacier
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#534) for a syntax highlighted version!)