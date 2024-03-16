## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/79d958e1c5e9acff1f1a053873852d7c3a682b16

## API Changes

```plain
Added Class VideoDeviceInput : Instance [NotReplicated]
	Added Property VideoDeviceInput.Active: boolean
	Added Property VideoDeviceInput.CameraId: string
	Added Property VideoDeviceInput.CaptureQuality: Enum.VideoDeviceCaptureQuality
	Added Property VideoDeviceInput.IsReady: boolean [ReadOnly]

Added Class VisualizationMode : Instance
	Added Property VisualizationMode.Enabled: boolean {RobloxScriptSecurity}
	Added Property VisualizationMode.Title: string {RobloxScriptSecurity}

Added Class VisualizationModeCategory : Instance
	Added Property VisualizationModeCategory.Enabled: boolean {RobloxScriptSecurity}
	Added Property VisualizationModeCategory.Title: string {RobloxScriptSecurity}

Added Class VisualizationModeService : Instance [NotCreatable] [Service]

Added Property AudioPlayer.Asset: string [📁 LoadOnly] [Hidden] [NotScriptable]
Added Property Collaborator.CollaboratorColor3: Color3 [Hidden]
Added Property Path2D.SelectedControlPointData: Path2DControlPoint {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property RenderingTest.RenderingTestFrameCount: number
Added Property SafetyService.IsCaptureModeForReport: boolean {RobloxScriptSecurity}

Added Function EditableImage:DrawProjectionImage(mesh: EditableMesh, projection: { [string]: any }, brushConfig: { [string]: any }) -> ()
Added Function WorldRoot:StepPhysics(dt: number, parts: { Instance }? = Objects?.new()) -> () {PluginSecurity}

Added Event AudioPlayer.Ended()
Added Event AudioPlayer.Looped()
Added Event DragDetector.DragContinueReplicate(playerWhoDragged: Player, cursorRay: Ray, viewFrame: CFrame, vrInputFrame: CFrame?, isModeSwitchKeyDown: boolean) [Hidden]
Added Event DragDetector.DragEndReplicate(playerWhoDragged: Player) [Hidden]
Added Event DragDetector.DragStartReplicate(playerWhoDragged: Player, cursorRay: Ray, viewFrame: CFrame, hitFrame: CFrame, clickedPart: BasePart, vrInputFrame: CFrame?, isModeSwitchKeyDown: boolean) [Hidden]
Added Event StreamingService.ConversationCleared() {RobloxScriptSecurity}

Added Enum ImageAlphaType
	Added EnumItem ImageAlphaType.Default : 1
	Added EnumItem ImageAlphaType.LockCanvasAlpha : 2
	Added EnumItem ImageAlphaType.LockCanvasColor : 3

Added Enum VideoDeviceCaptureQuality
	Added EnumItem VideoDeviceCaptureQuality.Default : 0
	Added EnumItem VideoDeviceCaptureQuality.Low : 1
	Added EnumItem VideoDeviceCaptureQuality.Medium : 2
	Added EnumItem VideoDeviceCaptureQuality.High : 3

Added Enum VideoError
	Added EnumItem VideoError.Ok : 0
	Added EnumItem VideoError.Eof : 1
	Added EnumItem VideoError.EAgain : 2
	Added EnumItem VideoError.BadParameter : 3
	Added EnumItem VideoError.AllocFailed : 4
	Added EnumItem VideoError.CodecInitFailed : 5
	Added EnumItem VideoError.CodecCloseFailed : 6
	Added EnumItem VideoError.DecodeFailed : 7
	Added EnumItem VideoError.ParsingFailed : 8
	Added EnumItem VideoError.Unsupported : 9
	Added EnumItem VideoError.Generic : 10
	Added EnumItem VideoError.DownloadFailed : 11
	Added EnumItem VideoError.StreamNotFound : 12
	Added EnumItem VideoError.EncodeFailed : 13
	Added EnumItem VideoError.CreateFailed : 14
	Added EnumItem VideoError.NoPermission : 15
	Added EnumItem VideoError.NoService : 16
	Added EnumItem VideoError.ReleaseFailed : 17
	Added EnumItem VideoError.Unknown : 18

Added EnumItem ImageCombineType.Add : 3
Added EnumItem ImageCombineType.Multiply : 4
Added EnumItem ImageCombineType.AlphaBlend : 5

Added Tag [CustomLuaState] to Function Terrain:ReadVoxelChannels
Added Tag [CustomLuaState] to Function Terrain:WriteVoxelChannels
Added Tag [Deprecated] to Property Collaborator.CollaboratorColor
Added Tag [NotBrowsable] to Class Path2D

Removed Class UserNotification
	Removed Property UserNotification.Id
	Removed Property UserNotification.Payload

Removed Class UserNotificationPayload
	Removed Property UserNotificationPayload.AnalyticsData
	Removed Property UserNotificationPayload.JoinExperience
	Removed Property UserNotificationPayload.MessageId
	Removed Property UserNotificationPayload.Type
	Removed Function UserNotificationPayload:GetParameters
	Removed Function UserNotificationPayload:SetParameters

Removed Class UserNotificationPayloadAnalyticsData
	Removed Property UserNotificationPayloadAnalyticsData.Category

Removed Class UserNotificationPayloadJoinExperience
	Removed Property UserNotificationPayloadJoinExperience.LaunchData

Removed Class UserNotificationPayloadParameterValue
	Removed Property UserNotificationPayloadParameterValue.Int64Value
	Removed Property UserNotificationPayloadParameterValue.StringValue

Removed Property LuaSourceContainer.CurrentEditor
Removed Property Path2D.ControlPointLeftTangent
Removed Property Path2D.ControlPointPosition
Removed Property Path2D.ControlPointRightTangent
Removed Property Studio.Automatically commit locked scripts when you save or publish to Roblox

Removed Function AssetImportSession:GetCurrentStatusTable_DEPRECATED
Removed Function AssetImportSession:GetInstance
Removed Function AssetImportSession:GetRigVisualization_DEPRECATED
Removed Function BaseImportData:GetStatuses_DEPRECATED
Removed Function ExperienceNotificationService:CreateUserNotificationAsync

Removed Event LuaSourceContainer.LockGrantedOrNot
Removed Event LuaSourceContainer.LostLock
Removed Event LuaSourceContainer.RequestLock

Removed Tag [Hidden] from Property Instance.UniqueId
Removed Tag [NotReplicated] from Property Instance.SourceAssetId
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#616) for a syntax highlighted version!)