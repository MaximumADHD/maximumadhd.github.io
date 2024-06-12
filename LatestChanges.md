## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/5bb47cb910e9b08f8e43b8e571649f034cab563d

## API Changes

```plain
Added Class UIDragDetector : UIComponent
	Added Property UIDragDetector.BoundingUI: GuiBase2d?
	Added Property UIDragDetector.DragRelativity: Enum.UIDragDetectorDragRelativity
	Added Property UIDragDetector.DragSpace: Enum.UIDragDetectorDragSpace
	Added Property UIDragDetector.DragStyle: Enum.UIDragDetectorDragStyle
	Added Property UIDragDetector.Enabled: boolean
	Added Property UIDragDetector.ReferenceUIInstance: GuiObject?
	Added Property UIDragDetector.ResponseStyle: Enum.UIDragDetectorResponseStyle
	Added Property UIDragDetector.DragAxis: Vector2
	Added Property UIDragDetector.MaxDragAngle: number
	Added Property UIDragDetector.MaxDragTranslation: UDim2
	Added Property UIDragDetector.MinDragAngle: number
	Added Property UIDragDetector.MinDragTranslation: UDim2
	Added Property UIDragDetector.DragRotation: number
	Added Property UIDragDetector.DragUDim2: UDim2
	Added Function UIDragDetector:AddConstraintFunction(priority: number, function: (...any) -> ...any) -> RBXScriptConnection
	Added Function UIDragDetector:GetReferencePosition() -> UDim2
	Added Function UIDragDetector:GetReferenceRotation() -> number
	Added Function UIDragDetector:SetDragStyleFunction(function: (...any) -> ...any) -> ()
	Added Event UIDragDetector.DragContinue(inputPosition: Vector2)
	Added Event UIDragDetector.DragEnd(inputPosition: Vector2)
	Added Event UIDragDetector.DragStart(inputPosition: Vector2)

Added Property AudioDeviceInput.Volume: number
Added Property AudioPlayer.Volume: number
Added Property ColorCorrectionEffect.TonemapperPreset: Enum.TonemapperPreset [NotScriptable]
Added Property ExperienceStateCaptureService.HiddenSelectionEnabled: boolean {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property TextBox.OpenTypeFeatures: string
Added Property TextBox.OpenTypeFeaturesError: string [ReadOnly]
Added Property TextButton.OpenTypeFeatures: string
Added Property TextButton.OpenTypeFeaturesError: string [ReadOnly]
Added Property TextLabel.OpenTypeFeatures: string
Added Property TextLabel.OpenTypeFeaturesError: string [ReadOnly]

Added Function AnimationStreamTrack:GetActive() -> boolean {RobloxScriptSecurity}
Added Function BaseWrap:GetUVs(cageType: Enum.CageType) -> { any } {RobloxScriptSecurity}
Added Function LogReporterService:ReportMultipleLogs(fingerprint: string, uuid: string, desc: string, attributes: { [string]: any }, annotations: { [string]: any }, numLogs: number) -> boolean {RobloxScriptSecurity}
Added Function SoundService:OpenAttenuationCurveEditor(selectedCurveObjects: { Instance }) -> () {PluginSecurity}
Added Function StudioDeviceEmulatorService:SetGamepadEmulationEnabled(enable: boolean) -> () {RobloxScriptSecurity} [Yields]

Added Event SoundService.OpenAttenuationCurveEditorSignal(selectedCurveObjects: { Instance }) {RobloxScriptSecurity}

Added Enum TonemapperPreset
	Added EnumItem TonemapperPreset.Default : 0
	Added EnumItem TonemapperPreset.Retro : 1

Added Enum UIDragDetectorDragRelativity
	Added EnumItem UIDragDetectorDragRelativity.Absolute : 0
	Added EnumItem UIDragDetectorDragRelativity.Relative : 1

Added Enum UIDragDetectorDragSpace
	Added EnumItem UIDragDetectorDragSpace.Parent : 0
	Added EnumItem UIDragDetectorDragSpace.LayerCollector : 1
	Added EnumItem UIDragDetectorDragSpace.Reference : 2

Added Tag [Deprecated] to Event GuiService.OpenAttenuationCurveEditor

Removed Property AnimationRigData.endEffectorRotationConstraint
Removed Property AnimationRigData.endEffectorTranslationConstraint
Removed Property AnimationRigData.endEffectorWeight
Removed Property AnimationRigData.facsControl
Removed Property AnimationRigData.rootMotion
Removed Property AnimationRigData.weight
Removed Property Workspace.EditorLiveScripting

Removed Function AssetManagerService:HasUnpublishedChangesForLinkedSource
Removed Function AssetManagerService:InsertLinkedSourceAsLocalScript
Removed Function AssetManagerService:InsertLinkedSourceAsModuleScript
Removed Function AssetManagerService:InsertLinkedSourceAsScript
Removed Function AssetManagerService:OpenLinkedSource
Removed Function AssetManagerService:PublishLinkedSource
Removed Function AssetManagerService:RefreshLinkedSource
Removed Function AssetManagerService:RevertLinkedSourceToLastPublishedVersion

Removed Event AssetManagerService.MayBeLinkedSourceModified
Removed Event Players.OnLinkedScriptsUpdated

Removed Enum EditorLiveScripting
	Removed EnumItem EditorLiveScripting.Default
	Removed EnumItem EditorLiveScripting.Disabled
	Removed EnumItem EditorLiveScripting.Enabled
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#629) for a syntax highlighted version!)