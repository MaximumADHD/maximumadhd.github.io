## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/e42792559dbb203ca87d2badecf4d1e07895930f

## API Changes

```plain
Added Class AppLifecycleObserverService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function AppLifecycleObserverService:IsDidDetachSupported() -> boolean {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnBecomeActive() {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnDetach() {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnHide() {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnResignActive() {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnStart() {RobloxScriptSecurity}
	Added Event AppLifecycleObserverService.OnUnhide() {RobloxScriptSecurity}

Added Property AccessoryDescription.Position: Vector3
Added Property AccessoryDescription.Rotation: Vector3
Added Property AccessoryDescription.Scale: Vector3

Added Function MaterialService:GetIsMaterialActionAsToolEnabled() -> boolean {RobloxScriptSecurity}
Added Function MaterialService:ToggleMaterialFillToolEnabled() -> () {RobloxScriptSecurity}
Added Function PluginToolbarButton:SetDropdownActive(active: boolean) -> () {RobloxScriptSecurity}

Added Event MaterialService.MaterialFillToolEnabledChanged(shouldEnable: boolean) {RobloxScriptSecurity}
Added Event SoundService.OpenAudioEqualizerEditorSignal(selectedEqualizerObjects: { Instance }) {RobloxScriptSecurity}

Added Tag [Yields] to Function AvatarGenerationJob:Cancel

Removed Tag [NotBrowsable] from Class Path2D

Removed Tag [NotReplicated] from Class EditableMesh
	Removed Tag [NotReplicated] from Property EditableMesh.MeshData
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#630) for a syntax highlighted version!)