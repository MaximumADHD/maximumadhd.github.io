## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/204aff77056178dee47f3a341dede6a95a20af13

## API Changes

```plain
Added Property Path2D.Color3: Color3

Added Function ConversationalAIAcceptanceService:DataModelHierarchyLatency(requestId: string, latency: number) -> () {RobloxScriptSecurity}
Added Function ExperienceService:GetPendingJoinAttempt() -> { [string]: any } {RobloxScriptSecurity}
Added Function Path2D:GetBoundingRect() -> Rect
Added Function StudioPublishService:GetLocalFilePath() -> string {RobloxScriptSecurity}
Added Function StudioPublishService:GetPlaceDisplayName() -> string {RobloxScriptSecurity}

Added Event CaptureService.CaptureSavedInternal(captureInfo: { [string]: any }) {RobloxScriptSecurity}
Added Event ExperienceService.OnNewJoinAttempt(params: { [string]: any }) {RobloxScriptSecurity}
Added Event VoiceChatService.ClientRetryJoinWithConfig(sessionConfigFlags: number) {RobloxSecurity} [Hidden]
Added Event VoiceChatService.VoiceChatClientVoiceCapabilityWithConfig(sessionConfigFlags: number) {RobloxSecurity} [Hidden]

Added Enum GamepadType
	Added EnumItem GamepadType.Unknown : 0
	Added EnumItem GamepadType.PS4 : 1
	Added EnumItem GamepadType.PS5 : 2
	Added EnumItem GamepadType.XboxOne : 3

Added EnumItem GuiType.CoreBillboards : 4

Changed the parameters of Function StreamingService:RunSandboxedCode 
	from: (code: string)
	  to: (requestId: string, code: string)

Removed Property Path2D.Color
Removed Property Path2D.Position

Removed Function Path2D:GetBoundingRect2D

Removed Event LuaSourceContainer.RequestScriptHash
Removed Event LuaSourceContainer.VerifyScriptHash
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#621) for a syntax highlighted version!)