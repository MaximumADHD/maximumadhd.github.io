## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/32df8cc94be4147028de811f644028839c94293a

## API Changes

```plain
Added Class MetaBreakpointManager : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function Instance MetaBreakpointManager:AddBreakpoint(Instance script, int line, Instance condition) {RobloxScriptSecurity}
	Added Function MetaBreakpoint MetaBreakpointManager:GetBreakpointById(int metaBreakpointId) {RobloxScriptSecurity}
	Added Function void MetaBreakpointManager:RemoveBreakpointById(int metaBreakpointId) {RobloxScriptSecurity}
	Added Event MetaBreakpointManager.MetaBreakpointAdded(MetaBreakpoint breakpoint) {RobloxScriptSecurity}
	Added Event MetaBreakpointManager.MetaBreakpointChanged(MetaBreakpoint breakpoint) {RobloxScriptSecurity}
	Added Event MetaBreakpointManager.MetaBreakpointRemoved(MetaBreakpoint breakpoint) {RobloxScriptSecurity}
	Added Event MetaBreakpointManager.MetaBreakpointSetChanged(MetaBreakpoint breakpoint, Dictionary detail) {RobloxScriptSecurity}

Added Class AdPortal : BasePart [NotCreatable]

Added Property Enum.StreamingIntegrityMode Workspace.StreamingIntegrityMode [NotScriptable]

Added Function Tuple ScriptDocument:GetViewport() {PluginSecurity}
Added Function string VoiceChatInternal:GetChannelId() {RobloxScriptSecurity}

Added Event ScriptDocument.ViewportChanged(int64 startLine, int64 endLine) {PluginSecurity}
Added Event StudioAssetService.OnSaveToRoblox(Objects instances) {RobloxScriptSecurity}

Added Enum StreamingIntegrityMode
	Added EnumItem StreamingIntegrityMode.Default : 0
	Added EnumItem StreamingIntegrityMode.Disabled : 1
	Added EnumItem StreamingIntegrityMode.MinimumRadiusPause : 2

Added EnumItem AssetType.DynamicHead : 79
Added EnumItem AvatarAssetType.DynamicHead : 79
Added EnumItem TrackerError.VideoNoPermission : 5
Added EnumItem TrackerError.AudioNoPermission : 8

Added Tag [NotBrowsable] to Class AdGui

Changed the parameters of Event Humanoid.EmoteTriggered 
	from: (Tuple successAndTrackTuple)
	  to: (bool success, AnimationTrack animationTrack)

Removed Class BreakpointManager
	Removed Function BreakpointManager:AddBreakpoint
	Removed Function BreakpointManager:GetBreakpointById
	Removed Function BreakpointManager:RemoveBreakpointById
	Removed Event BreakpointManager.MetaBreakpointAdded
	Removed Event BreakpointManager.MetaBreakpointChanged
	Removed Event BreakpointManager.MetaBreakpointRemoved
	Removed Event BreakpointManager.MetaBreakpointSetChanged

Removed Property MaterialService.hasPropertyWarningInStudio

Removed Enum AdFormat
	Removed EnumItem AdFormat.Image

Removed EnumItem TrackerError.CameraPermission
Removed EnumItem TrackerError.MicPermission
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#541) for a syntax highlighted version!)