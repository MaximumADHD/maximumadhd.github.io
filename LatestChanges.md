## Client Difference Log



## API Changes

```plain
Added Class TextureGenerationUnwrappingRequest : Instance [NotCreatable] [NotReplicated]
	Added Function TextureGenerationUnwrappingRequest:ApplyToDataModel(partGroup: TextureGenerationPartGroup) -> TextureGenerationPartGroup {RobloxScriptSecurity}
	Added Function TextureGenerationUnwrappingRequest:GetPartGroup() -> TextureGenerationPartGroup {RobloxScriptSecurity}

Added Property PlayerEmulatorService.PseudolocalizationEnabled: boolean {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property RunService.RunState: Enum.RunState {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property VoiceChatService.UseRME: boolean {RobloxSecurity} [Hidden]
Added Property Workspace.CSGAsyncDynamicCollision: Enum.CSGAsyncDynamicCollision [NotScriptable]

Added Function AccountService:DeviceAccessTokenAvailable() -> boolean {RobloxScriptSecurity}
Added Function AccountService:GetCredentialsHeaders() -> string {RobloxScriptSecurity} [Yields]
Added Function AccountService:GetDeviceAccessToken() -> string {RobloxScriptSecurity} [Yields]
Added Function BadgeService:CheckUserBadgesAsync(userId: number, badgeIds: { any }) -> { any } [Yields]
Added Function ConversationalAIAcceptanceService:CodeRunnerActivated(requestId: string, code: string) -> () {RobloxScriptSecurity}
Added Function ConversationalAIAcceptanceService:CodeRunnerCompleted(requestId: string, success: boolean, errorMessage: string) -> () {RobloxScriptSecurity}
Added Function ConversationalAIAcceptanceService:CodeRunnerUndone(requestId: string) -> () {RobloxScriptSecurity}
Added Function ExperienceNotificationService:CanPromptOptInAsync() -> boolean [Yields]
Added Function ExperienceNotificationService:InvokeOptInPromptClosed() -> () {RobloxScriptSecurity}
Added Function ExperienceNotificationService:PromptOptIn() -> ()
Added Function TextureGenerationService:CancelGenerationRequest(jobUuid: string) -> () {RobloxScriptSecurity}
Added Function TextureGenerationService:CreatePartGroup(instances: { Instance }) -> TextureGenerationPartGroup {RobloxScriptSecurity}
Added Function TextureGenerationService:GenerateTexture(previewJobId: string) -> { [string]: any } {RobloxScriptSecurity}
Added Function TextureGenerationService:PreviewTexture(partGroup: TextureGenerationPartGroup, prompt: string, options: { [string]: any }) -> { [string]: any } {RobloxScriptSecurity}

Added Event ExperienceNotificationService.OptInPromptClosed()
Added Event ExperienceNotificationService.PromptOptInRequested() {RobloxScriptSecurity}

Added Enum CSGAsyncDynamicCollision
	Added EnumItem CSGAsyncDynamicCollision.Default : 0
	Added EnumItem CSGAsyncDynamicCollision.Disabled : 1
	Added EnumItem CSGAsyncDynamicCollision.Experimental : 2

Added Enum RunState
	Added EnumItem RunState.Stopped : 0
	Added EnumItem RunState.Running : 1
	Added EnumItem RunState.Paused : 2

Added EnumItem Font.BuilderSans : 46
Added EnumItem Font.BuilderSansMedium : 47
Added EnumItem Font.BuilderSansBold : 48
Added EnumItem Font.BuilderSansExtraBold : 49

Changed the read permissions of Property HttpService.HttpEnabled 
	from: {LocalUserSecurity}
	  to: {None}

Removed Property LuaSourceContainer.RuntimeSource

Removed Function TextureGenerationService:CancelGenerationRequestAsync
Removed Function TextureGenerationService:GenerateTextureAsync
Removed Function TextureGenerationService:PreviewTextureAsync
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#615) for a syntax highlighted version!)