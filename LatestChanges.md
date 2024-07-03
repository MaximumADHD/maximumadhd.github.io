## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/9f43a0b49e1069ad6bdd8927c4a3f46901cbb237

## API Changes

```plain
Added Class RTAnimationTracker : Instance [NotReplicated]
	Added Property RTAnimationTracker.Active: boolean [Hidden] [NotReplicated]
	Added Property RTAnimationTracker.EnableFallbackAudioInput: boolean [Hidden] [NotReplicated]
	Added Property RTAnimationTracker.SessionName: string [Hidden] [NotReplicated]
	Added Property RTAnimationTracker.TrackerMode: Enum.TrackerMode [Hidden] [ReadOnly]
	Added Property RTAnimationTracker.TrackerType: Enum.TrackerType [Hidden] [NotReplicated]
	Added Event RTAnimationTracker.TrackerError(errorCode: Enum.TrackerError, msg: string)
	Added Event RTAnimationTracker.TrackerPrompt(prompt: Enum.TrackerPromptEvent)

Added Class AtmosphereSensor : SensorBase
	Added Property AtmosphereSensor.AirDensity: number [ReadOnly]
	Added Property AtmosphereSensor.RelativeWindVelocity: Vector3 [ReadOnly]

Added Property UserGameSettings.PreferredTextSize: Enum.PreferredTextSize {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function AccessoryDescription:GetAppliedInstance() -> Instance?
Added Function CaptureService:CreatePostAsync(pathArr: { any }, caption: string) -> { [string]: any } {RobloxScriptSecurity} [Yields]

Added Event Humanoid.ApplyDescriptionFinished(description: HumanoidDescription)
Added Event VoiceChatService.SubscriptionDropped(sessionId: string) {RobloxSecurity} [Hidden]

Added Enum PreferredTextSize
	Added EnumItem PreferredTextSize.Medium : 0
	Added EnumItem PreferredTextSize.Large : 4
	Added EnumItem PreferredTextSize.Larger : 9
	Added EnumItem PreferredTextSize.Largest : 14

Added Enum TrackerType
	Added EnumItem TrackerType.None : 0
	Added EnumItem TrackerType.Face : 1
	Added EnumItem TrackerType.UpperBody : 2

Added Tag [Deprecated] to Event CaptureService.CaptureSaved

Added Tags [Deprecated] [Hidden] to Property ScreenshotHud.ExperienceNameOverlayEnabled
Added Tags [Deprecated] [Hidden] to Property ScreenshotHud.OverlayFont
Added Tags [Deprecated] [Hidden] to Property ScreenshotHud.UsernameOverlayEnabled

Changed the parameters of Function AnalyticsService:LogFunnelStepEvent 
	from: (player: Player, funnelName: string, funnelSessionId: string? = "", step: number? = 0, stepName: string? = "", customFields: { [string]: any }? = nil)
	  to: (player: Player, funnelName: string, funnelSessionId: string? = "", step: number? = 1, stepName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function EditableImage:DrawCircle 
	from: (center: Vector2, radius: number, color: Color3, transparency: number)
	  to: (center: Vector2, radius: number, color: Color3, transparency: number, combineType: Enum.ImageCombineType)

Changed the parameters of Function EditableImage:DrawLine 
	from: (p1: Vector2, p2: Vector2, color: Color3, transparency: number)
	  to: (p1: Vector2, p2: Vector2, color: Color3, transparency: number, combineType: Enum.ImageCombineType)

Changed the parameters of Function EditableImage:DrawRectangle 
	from: (position: Vector2, size: Vector2, color: Color3, transparency: number)
	  to: (position: Vector2, size: Vector2, color: Color3, transparency: number, combineType: Enum.ImageCombineType)

Removed Function StudioDeviceEmulatorService:ConnectGamepad
Removed Function StudioDeviceEmulatorService:DisconnectGamepad
Removed Function StudioDeviceEmulatorService:GetKeyboardShortcut
Removed Function StudioDeviceEmulatorService:SendGamepadEvent
Removed Function StudioDeviceEmulatorService:SetGamepadEmulationEnabled
Removed Function StudioDeviceEmulatorService:UpdateKeyMapping
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#632) for a syntax highlighted version!)