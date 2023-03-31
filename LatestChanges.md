## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/13c5151719d859935d013c7abcc93c12615c371f

## API Changes

```plain
Added Class ScriptRuntime : Instance [NotCreatable] [NotReplicated]

Added Property bool AnimationConstraint.IsKinematic
Added Property double IncrementalPatchBuilder.BuildDebouncePeriod
Added Property bool PhysicsSettings.AreConstraintForcesShownForSelectedOrHoveredInstances {RobloxScriptSecurity}
Added Property bool PhysicsSettings.AreConstraintTorquesShownForSelectedOrHoveredInstances {RobloxScriptSecurity}
Added Property bool PhysicsSettings.AreContactForcesShownForSelectedOrHoveredAssemblies {RobloxScriptSecurity}
Added Property bool PhysicsSettings.AreMagnitudesShownForDrawnForcesAndTorques {RobloxScriptSecurity}
Added Property float PhysicsSettings.ForceDrawScale {RobloxScriptSecurity}

Added Function void AnimationStreamTrack:TogglePause(bool paused) {RobloxScriptSecurity}
Added Function AnimationStreamTrack Animator:LoadStreamAnimationForSelfieView_deprecated(TrackerStreamAnimation animation, Player player) {RobloxScriptSecurity}
Added Function bool DataModel:IsUniverseMetadataLoaded() {RobloxScriptSecurity}
Added Function void ScriptEditorService:ForceReloadSource(string uri, string newsrc) {RobloxScriptSecurity}
Added Function Tuple Terrain:SmoothRegion(Region3 region, float resolution, float strength) {RobloxScriptSecurity} [CustomLuaState] {🧬Safe}
Added Function Array TerrainRegion:GetRegionWireframe() {RobloxScriptSecurity}
Added Function RaycastResult WorldRoot:Blockcast(CFrame cframe, Vector3 size, Vector3 direction, RaycastParams params = RaycastParams.new())
Added Function RaycastResult WorldRoot:Spherecast(Vector3 position, float radius, Vector3 direction, RaycastParams params = RaycastParams.new())

Added Event DataModel.UniverseMetadataLoaded() {RobloxScriptSecurity}
Added Event FacialAnimationStreamingServiceStats.isStreamingFacsUpdated(bool isStreaming, int64 playerId) {RobloxScriptSecurity}

Added EnumItem TrackerError.VideoUnsupported : 6

Changed the value of EnumItem TrackerError.NoAudio from 6 to 7
Changed the value of EnumItem TrackerError.AudioError from 7 to 8
Changed the value of EnumItem TrackerError.AudioNoPermission from 8 to 9
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#569) for a syntax highlighted version!)