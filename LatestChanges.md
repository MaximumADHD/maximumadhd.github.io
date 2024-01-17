## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/9d33d019da34054f39a543bea1c6a5c02c92cd28

## API Changes

```plain
Added Property Collaborator.IsIdle: boolean

Added Function CaptureService:CaptureScreenshot(onCaptureReady: (...any) -> ...any) -> ()
Added Function DraftsService:ShowSourceDiffsAgainstCurrent(sources: { any }, scripts: { Instance }) -> () {RobloxScriptSecurity}
Added Function PlayerViewService:OnCameraCFrameReplicationRequest() -> () {RobloxScriptSecurity}
Added Function PlayerViewService:UpdateDeviceCFrame(player: Player? = nil, cframe: CFrame? = CFrame?.new(), timestamp: number? = 0) -> () {RobloxScriptSecurity}
Added Function UGCValidationService:ResetCollisionFidelityWithEditableMeshDataLua(meshPart: MeshPart, editableMesh: EditableMesh, collisionFidelity: Enum.CollisionFidelity? = "Box") -> () {RobloxScriptSecurity}

Changed the parameters and return-type of Function ScriptContext:SaveScriptProfilingData 
	from: (filename: string) ()
	  to: (jsonString: string, filename: string) string

Removed Property StarterPlayer.AnimationCompositorMode
Removed Property StarterPlayer.HumanoidStateMachineMode

Removed Enum AnimationCompositorMode
	Removed EnumItem AnimationCompositorMode.Default
	Removed EnumItem AnimationCompositorMode.Enabled
	Removed EnumItem AnimationCompositorMode.Disabled

Removed Enum HumanoidStateMachineMode
	Removed EnumItem HumanoidStateMachineMode.Default
	Removed EnumItem HumanoidStateMachineMode.Legacy
	Removed EnumItem HumanoidStateMachineMode.NoStateMachine
	Removed EnumItem HumanoidStateMachineMode.LuaStateMachine
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#608) for a syntax highlighted version!)