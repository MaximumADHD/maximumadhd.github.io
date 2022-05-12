## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/fc71cb4c4bdb43ce7d6864864eee32f28b5b8921

## API Changes

```plain
Added Property float Studio.Main Volume {RobloxScriptSecurity}
Added Property bool Studio.Show Navigation Labels {RobloxScriptSecurity}
Added Property Enum.WrapLayerAutoSkin WrapLayer.AutoSkin

Added Function void AssetImportService:Cancel() {RobloxScriptSecurity}
Added Function void MetaBreakpoint:SetContextEnabled(int context, bool enabled) {RobloxScriptSecurity}
Added Function void SessionService:RemoveSessionsWithMetadataKey(string key) {RobloxScriptSecurity}

Added Enum WrapLayerAutoSkin
	Added EnumItem WrapLayerAutoSkin.Disabled : 0
	Added EnumItem WrapLayerAutoSkin.EnabledPreserve : 1
	Added EnumItem WrapLayerAutoSkin.EnabledOverride : 2

Changed the security of Property UserGameSettings.MasterVolume 
	from: {None}
	  to: {RobloxScriptSecurity}

Removed Class ReplicatedScriptService

Removed Property GameSettings.AdditionalCoreIncludeDirs
Removed Property GameSettings.OverrideStarterScript
Removed Property Studio.OverrideCoreScripts
Removed Property Studio.OverrideCoreScriptsDir
Removed Property Studio.Show Navigation Areas
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#526) for a syntax highlighted version!)