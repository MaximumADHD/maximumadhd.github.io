## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/9add9114d12e24cf08fa5680dbc95ace2af5c981

## API Changes

```plain
Added Property AudioListener.DistanceAttenuation: BinaryString {RobloxSecurity}
Added Property Lighting.Intent: Enum.Intent [NotScriptable]
Added Property Lighting.Quality: Enum.Quality [NotScriptable]

Added Function AudioListener:GetDistanceAttenuation() -> { [string]: any } [CustomLuaState]
Added Function AudioListener:SetDistanceAttenuation(curve: { [string]: any }) -> () [CustomLuaState]
Added Function AvatarCreationService:GenerateAvatarAsync(sessionId: string, previewId: string) -> string [Yields]
Added Function AvatarCreationService:GenerateAvatarPreviewAsync2(sessionId: string, fileId: string, textPrompt: string) -> string [Yields]
Added Function AvatarCreationService:LoadAvatarHumanoidDescriptionAsync(id: string) -> HumanoidDescription [Yields]
Added Function AvatarCreationService:RequestAvatarGenerationSessionAsync(player: Player, callback: (...any) -> ...any) -> ...any [Yields]
Added Function CaptureService:GetCaptureUploadDataAsync(capturePath: string) -> { [string]: any } {RobloxScriptSecurity} [Yields]
Added Function ConversationalAIAcceptanceService:ReportJSONEncodeFailure(instanceName: string, className: string) -> () {RobloxScriptSecurity}
Added Function GuiService:DismissNotification(notificationId: string) -> boolean
Added Function GuiService:NotificationDismissed(notificationId: string) -> () {RobloxScriptSecurity}
Added Function GuiService:NotificationDisplayed(notificationId: string) -> () {RobloxScriptSecurity}
Added Function GuiService:SendNotification(notificationInfo: { [string]: any }) -> string
Added Function GuiService:UserInteractedWithNotification(notificationId: string, buttonIndex: number) -> () {RobloxScriptSecurity}
Added Function Instance:GetStyled(name: string) -> any

Added Enum Intent
	Added EnumItem Intent.Realistic : 0
	Added EnumItem Intent.Flat : 1

Added Enum Quality
	Added EnumItem Quality.Performance : 0
	Added EnumItem Quality.Quality : 1

Added EnumItem Technology.Unified : 5 [Preliminary]

Added Tag [Deprecated] to Function InsertService:GetCollection
Added Tag [Deprecated] to Function InsertService:GetUserSets

Removed Class AvatarGenerationJob
	Removed Property AvatarGenerationJob.Error
	Removed Property AvatarGenerationJob.ErrorMessage
	Removed Property AvatarGenerationJob.Progress
	Removed Property AvatarGenerationJob.Status
	Removed Function AvatarGenerationJob:Cancel
	Removed Function AvatarGenerationJob:GetOutput
	Removed Function AvatarGenerationJob:Wait

Removed Class AvatarGenerationSession
	Removed Function AvatarGenerationSession:GenerateAvatarModel
	Removed Function AvatarGenerationSession:GenerateAvatarPreview

Removed Class Avatar2DGenerationJob
	Removed Property Avatar2DGenerationJob.Result

Removed Class Avatar3DGenerationJob
	Removed Property Avatar3DGenerationJob.Result

Removed Function AvatarCreationService:CreateAvatarGenerationSessionAsync

Removed Enum AvatarGenerationJobStatus
	Removed EnumItem AvatarGenerationJobStatus.NotStarted
	Removed EnumItem AvatarGenerationJobStatus.InProgress
	Removed EnumItem AvatarGenerationJobStatus.Completed
	Removed EnumItem AvatarGenerationJobStatus.Failed
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#641) for a syntax highlighted version!)