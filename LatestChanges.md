## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/529e763561489b17209fc587a7e981b70a1ab9f4

## API Changes

```plain
Added Class TextureGenerationService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function TextureGenerationService:CancelGenerationRequestAsync(jobUuid: string) -> () {RobloxScriptSecurity} [Yields]
	Added Function TextureGenerationService:GenerateTextureAsync(previewUuid: string) -> { [string]: any } {RobloxScriptSecurity} [Yields]
	Added Function TextureGenerationService:GetQuotasAsync() -> { [string]: any } {RobloxScriptSecurity} [Yields]
	Added Function TextureGenerationService:PreviewTextureAsync(meshObj: string, prompt: string, options: { [string]: any }) -> { [string]: any } {RobloxScriptSecurity} [Yields]
	Added Event TextureGenerationService.GenerationNotificationSignal(notificationData: { [string]: any }) {RobloxScriptSecurity}
	Added Event TextureGenerationService.PreviewNotificationSignal(notificationData: { [string]: any }) {RobloxScriptSecurity}

Added Property Path2D.ZIndex: number {RobloxScriptSecurity}
Added Property RootImportData.PreferredUploadId: number

Added Function AssetService:GetAudioMetadataAsync(idList: { any }) -> { any } [Yields]
Added Function CaptureService:GetCaptureFilePathAsync(captureContentId: string) -> string {RobloxScriptSecurity} [Yields]
Added Function Path2D:GetBoundingRect2D() -> Rect {RobloxScriptSecurity}

Added Enum ModerationStatus
	Added EnumItem ModerationStatus.ReviewedApproved : 1
	Added EnumItem ModerationStatus.ReviewedRejected : 2
	Added EnumItem ModerationStatus.NotReviewed : 3
	Added EnumItem ModerationStatus.NotApplicable : 4
	Added EnumItem ModerationStatus.Invalid : 5

Added Tag [NotBrowsable] to Class VRService
Added Tag [NotReplicated] to Property VRService.FadeOutViewOnCollision
Added Tag [NotReplicated] to Property VRService.GuiInputUserCFrame

Changed the serialization of Property VRService.AutomaticScaling 
	from: [🚫 None]
	  to: [💾|📁 Serialized]

Changed the serialization of Property VRService.FadeOutViewOnCollision 
	from: [🚫 None]
	  to: [💾|📁 Serialized]

Changed the parameters of Function StudioPublishService:PublishAs 
	from: (universeId: number, placeId: number, groupId: number, isPublish: boolean, publishParameters: any)
	  to: (universeId: number, placeId: number, groupId: number, isPublish: boolean, publishParameters: any, willRetryOnConflict: boolean? = false)

Changed the parameters of Event CaptureService.OpenShareCapturePrompt 
	from: (promptId: number, contentId: string, capturePath: string, launchData: string)
	  to: (promptId: number, contentId: string, launchData: string)

Changed the security of Event CollaboratorsService.CollaboratorIdleUpdate 
	from: {RobloxSecurity}
	  to: {RobloxScriptSecurity}

Changed the value of EnumItem CollaboratorStatus.None from 3 to 0
Changed the value of EnumItem CollaboratorStatus.Editing3D from 0 to 1
Changed the value of EnumItem CollaboratorStatus.Scripting from 1 to 2
Changed the value of EnumItem CollaboratorStatus.PrivateScripting from 2 to 3

Removed Function MaterialGenerationService:GetAccountingBalanceAsync
Removed Function MaterialGenerationService:RefillAccountingBalanceAsync

Removed Tag [Hidden] from Event CollaboratorsService.CollaboratorIdleUpdate
Removed Tag [Hidden] from Event CollaboratorsService.CollaboratorInstanceCreatedSignal
Removed Tag [Hidden] from Event CollaboratorsService.CollaboratorInstanceDestroyedSignal
Removed Tag [Hidden] from Event CollaboratorsService.CollaboratorStatusUpdatedSignal
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#610) for a syntax highlighted version!)