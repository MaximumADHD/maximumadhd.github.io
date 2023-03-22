## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/b9c7bc271a152c4dc20600856f3e286215ea6642

## API Changes

```plain
Added Class AudioSearchParams : Instance [NotReplicated]
	Added Property string AudioSearchParams.Album
	Added Property string AudioSearchParams.Artist
	Added Property Enum.AudioSubType AudioSearchParams.AudioSubtype
	Added Property int AudioSearchParams.MaxDuration
	Added Property int AudioSearchParams.MinDuration
	Added Property string AudioSearchParams.SearchKeyword
	Added Property string AudioSearchParams.Tag
	Added Property string AudioSearchParams.Title

Added Class AudioPages : Pages [NotCreatable] [NotReplicated]

Added Property Enum.AdUnitStatus AdGui.Status [ReadOnly]
Added Property Enum.AdUnitStatus AdPortal.Status [ReadOnly]
Added Property SharedString PartOperation.SerializedCSGTree [Hidden] [NotReplicated] [NotScriptable]
Added Property bool PhysicsSettings.AreSolverIslandsShown {RobloxScriptSecurity}
Added Property Enum.SolverConvergenceVisualizationMode PhysicsSettings.SolverConvergenceVisualizationMode {RobloxScriptSecurity}
Added Property Enum.VRSafetyBubbleMode UserGameSettings.VRSafetyBubbleMode {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property float UserGameSettings.PlayerHeight {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function RBXScriptConnection Actor:BindToMessage(string name, Function function) {🧬Safe}
Added Function RBXScriptConnection Actor:BindToMessageParallel(string name, Function function) {🧬Safe}
Added Function void Actor:SendMessage(string name, Tuple message) {🧬Safe}
Added Function AudioPages AssetService:SearchAudio(AudioSearchParams searchParameters) [Yields]
Added Function bool DataModel:IsContentLoaded() {RobloxScriptSecurity}
Added Function void DataModel:SetIsLoaded(bool value, int? placeSizeInBytes) {RobloxScriptSecurity}
Added Function void ExperienceAuthService:ScopeCheckUIComplete(string guid, Array scopes, Enum.ScopeCheckResult result, Dictionary metadata) {RobloxScriptSecurity}
Added Function CFrame IKControl:GetNodeLocalCFrame(int index) [NotBrowsable]
Added Function CFrame IKControl:GetNodeWorldCFrame(int index) [NotBrowsable]
Added Function CFrame IKControl:GetRawFinalTarget() [NotBrowsable]
Added Function CFrame IKControl:GetSmoothedFinalTarget() [NotBrowsable]
Added Function Instance Plugin:Intersect(Objects objects) {PluginSecurity}

Added Enum AdUnitStatus
	Added EnumItem AdUnitStatus.Inactive : 0
	Added EnumItem AdUnitStatus.Active : 1

Added Enum AudioSubType
	Added EnumItem AudioSubType.Music : 1
	Added EnumItem AudioSubType.SoundEffect : 2

Added Enum SolverConvergenceVisualizationMode
	Added EnumItem SolverConvergenceVisualizationMode.Disabled : 0
	Added EnumItem SolverConvergenceVisualizationMode.PerIsland : 1
	Added EnumItem SolverConvergenceVisualizationMode.PerEdge : 2

Added Enum VRSafetyBubbleMode
	Added EnumItem VRSafetyBubbleMode.NoOne : 0
	Added EnumItem VRSafetyBubbleMode.OnlyFriends : 1
	Added EnumItem VRSafetyBubbleMode.Anyone : 2

Added Tag [Deprecated] to Property AdPortal.PortalStatus

Changed the serialization of Property ControllerManager.ActiveController 
	from: [<💾> SaveOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the thread safety of Function ControllerManager:GetControllers 
	from: {🧬Safe}
	  to: {🧬Unsafe}

Removed Class StudioHighDpiService
	Removed Function StudioHighDpiService:IsNotHighDPIAwareBuild

Removed Function ExperienceAuthService:scopeCheckUIComplete

Removed Tag [ReadOnly] from Property ControllerManager.ActiveController
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#568) for a syntax highlighted version!)