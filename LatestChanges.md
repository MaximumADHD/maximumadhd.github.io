## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/ccc336b163081a7b4f475690aa9451482c38cb19

## API Changes

```plain
Added Property Enum.UnionsScaleNonuniformly Workspace.UnionsScaleNonuniformly [NotScriptable]

Added Function void StudioPublishService:PublishThenTurnOnTeamCreate() {RobloxScriptSecurity}
Added Function bool UGCValidationService:ValidateMeshTriangles(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateMeshVertColors(string meshId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateTextureSize(string textureId) {RobloxScriptSecurity} [Yields]
Added Function bool UGCValidationService:ValidateUVSpace(string meshId) {RobloxScriptSecurity} [Yields]

Added Enum UnionsScaleNonuniformly
	Added EnumItem UnionsScaleNonuniformly.Default : 0
	Added EnumItem UnionsScaleNonuniformly.Disabled : 1
	Added EnumItem UnionsScaleNonuniformly.Enabled : 2

Moved Property MeshSize
	from: Class MeshPart
	  to: Class TriangleMeshPart

Removed Function Player:IsUserAvailableForExperiment
Removed Function StudioService:DEPRECATED_EmitPlacePublishedSignal
Removed Function StudioService:DEPRECATED_RefreshDocumentDisplayName
Removed Function StudioService:DEPRECATED_SetUniverseDisplayName
Removed Function StudioService:DEPRECATED_ShowSaveOrPublishPlaceToRoblox
Removed Function StudioService:DEPRECATED_publishAs

Removed Event StudioService.DEPRECATED_GameNameUpdated
Removed Event StudioService.DEPRECATED_GamePublishFinished
Removed Event StudioService.DEPRECATED_OnPublishPlaceToRoblox
Removed Event StudioService.DEPRECATED_OnSaveOrPublishPlaceToRoblox
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#535) for a syntax highlighted version!)