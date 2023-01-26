## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/7f9282c09e6de4ed0e6758b0ee404482640cbcc9

## API Changes

```plain
Added Class LiveScriptingService : Instance [NotCreatable] [Service]

Added Class SmoothVoxelsUpgraderService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function void SmoothVoxelsUpgraderService:Cancel() {RobloxScriptSecurity}
	Added Function void SmoothVoxelsUpgraderService:Start() {RobloxScriptSecurity}
	Added Event SmoothVoxelsUpgraderService.Status(float progressRatio) {RobloxScriptSecurity}

Added Class StudioSdkService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function Instance StudioSdkService:GetSdk() {RobloxScriptSecurity}
	Added Function void StudioSdkService:SetSdk(Instance sdk) {RobloxScriptSecurity}

Added Property bool Terrain.SmoothVoxelsUpgraded {RobloxScriptSecurity} [Hidden]

Added Function bool Terrain:CanSmoothVoxelsBeUpgraded() {RobloxScriptSecurity}

Added EnumItem CatalogSortType.RecentlyCreated : 6

Removed Property Workspace.UnionsScaleNonuniformly

Removed Enum UnionsScaleNonuniformly
	Removed EnumItem UnionsScaleNonuniformly.Default
	Removed EnumItem UnionsScaleNonuniformly.Disabled
	Removed EnumItem UnionsScaleNonuniformly.Enabled

Removed EnumItem CatalogSortType.RecentlyUpdated

Removed Tag [NotBrowsable] from Class IKControl
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#560) for a syntax highlighted version!)