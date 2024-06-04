## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/238ba288e6acca9c9e1970173f509d6b3ba7e69a

## API Changes

```plain
Added Class LinkingService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function LinkingService:DetectUrl(url: string) -> () {RobloxScriptSecurity}
	Added Function LinkingService:GetAndClearLastPendingUrl() -> { [string]: any } {RobloxScriptSecurity}
	Added Function LinkingService:GetLastLuaUrl() -> string? {RobloxScriptSecurity}
	Added Function LinkingService:IsUrlRegistered(url: string) -> boolean {RobloxScriptSecurity}
	Added Function LinkingService:OpenUrl(url: string) -> boolean {RobloxScriptSecurity} [Yields]
	Added Function LinkingService:RegisterLuaUrl(url: string) -> () {RobloxScriptSecurity}
	Added Function LinkingService:StartLuaUrlDelivery() -> { [string]: any }? {RobloxScriptSecurity}
	Added Function LinkingService:StopLuaUrlDelivery() -> () {RobloxScriptSecurity}
	Added Function LinkingService:SupportsSwitchToSettingsApp() -> boolean {RobloxScriptSecurity} [Yields]
	Added Function LinkingService:SwitchToSettingsApp(route: string?) -> () {RobloxScriptSecurity} [Yields]
	Added Event LinkingService.OnLuaUrl(url: string, matchedUrl: string, attributionUrl: string?) {RobloxScriptSecurity}

Added Property AudioChorus.Bypass: boolean
Added Property AudioCompressor.Bypass: boolean
Added Property AudioDistortion.Bypass: boolean
Added Property AudioEcho.Bypass: boolean
Added Property AudioEqualizer.Bypass: boolean
Added Property AudioFader.Bypass: boolean
Added Property AudioFlanger.Bypass: boolean
Added Property AudioPitchShifter.Bypass: boolean
Added Property AudioReverb.Bypass: boolean
Added Property UserGameSettings.HapticStrength: number {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property Workspace.MoverConstraintRootBehavior: Enum.MoverConstraintRootBehaviorMode [NotScriptable]

Added Function StudioDeviceEmulatorService:GetKeyboardShortcut(deviceId: number, gamepadKey: Enum.KeyCode, position: Vector3) -> { any } {RobloxScriptSecurity} [Yields]
Added Function StudioDeviceEmulatorService:UpdateKeyMapping(deviceId: number, keyboardShortcut: { any }, gamepadKey: Enum.KeyCode, position: Vector3) -> boolean {RobloxScriptSecurity} [Yields]
Added Function UGCValidationService:ReportUGCValidationTelemetry(assetType: string, data: { [string]: any }) -> () {RobloxScriptSecurity}
Added Function UGCValidationService:ValidateImageTransparencyThresholdByteString_V2(image: string, threshold: number) -> boolean {RobloxScriptSecurity} [Yields]
Added Function UGCValidationService:ValidateImageTransparencyThresholdTextureID_V2(textureId: string, threshold: number) -> boolean {RobloxScriptSecurity} [Yields]

Added Enum MoverConstraintRootBehaviorMode
	Added EnumItem MoverConstraintRootBehaviorMode.Default : 0
	Added EnumItem MoverConstraintRootBehaviorMode.Disabled : 1
	Added EnumItem MoverConstraintRootBehaviorMode.Enabled : 2

Added Tag [Hidden] to Property TriangleMeshPart.UnscaledCofm
Added Tag [Hidden] to Property TriangleMeshPart.UnscaledVolInertiaDiags
Added Tag [Hidden] to Property TriangleMeshPart.UnscaledVolInertiaOffDiags
Added Tag [Hidden] to Property TriangleMeshPart.UnscaledVolume
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#628) for a syntax highlighted version!)