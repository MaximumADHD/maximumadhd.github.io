## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/184e976d9e2c4be893a7d2f0a4f4c067cf4194ca

## API Changes

```plain
Added Class AchievementService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function AchievementService:GrantAchievement(achievementName: string) -> boolean {RobloxScriptSecurity} [Yields]
	Added Function AchievementService:HasAchieved(achievementName: string) -> boolean {RobloxScriptSecurity} [Yields]
	Added Function AchievementService:IsAvailable() -> boolean {RobloxScriptSecurity}

Added Class AudioFilter : Instance [NotBrowsable]
	Added Property AudioFilter.Bypass: boolean
	Added Property AudioFilter.FilterType: Enum.AudioFilterType
	Added Property AudioFilter.Frequency: number
	Added Property AudioFilter.Gain: number
	Added Property AudioFilter.Q: number
	Added Function AudioFilter:GetConnectedWires(pin: string) -> { any }
	Added Function AudioFilter:GetGainAt(frequency: number) -> number

Added Property BasePart.PhysicsRepRootPart: BasePart? {RobloxSecurity} [Hidden] [NotScriptable]
Added Property ExperienceStateCaptureService.IsInBackground: boolean {RobloxScriptSecurity} [Hidden] [ReadOnly]

Added Function ExperienceService:ExecuteCrossExperienceCall(callId: string, params: { [string]: any }, successCallback: (...any) -> ...any, errorCallback: (...any) -> ...any) -> () {RobloxScriptSecurity}
Added Function UGCValidationService:CalculateEditableMeshTotalSurfaceArea(editableMesh: EditableMesh, meshScale: Vector3) -> number {RobloxScriptSecurity}
Added Function UGCValidationService:CalculateTotalSurfaceArea(meshId: string, meshScale: Vector3) -> number {RobloxScriptSecurity} [Yields]

Added Event VoiceChatService.SubscriptionFeedStarted(eventTag: number, sessionId: string) {RobloxSecurity} [Hidden]
Added Event VoiceChatService.UserTurnAuth(sessionId: string, userName: string, password: string, ttl: number, uris: { any }) {RobloxSecurity} [Hidden]

Added Enum AudioFilterType
	Added EnumItem AudioFilterType.Peak : 0
	Added EnumItem AudioFilterType.LowShelf : 1
	Added EnumItem AudioFilterType.HighShelf : 2
	Added EnumItem AudioFilterType.Lowpass12dB : 3
	Added EnumItem AudioFilterType.Lowpass24dB : 4
	Added EnumItem AudioFilterType.Lowpass48dB : 5
	Added EnumItem AudioFilterType.Highpass12dB : 6
	Added EnumItem AudioFilterType.Highpass24dB : 7
	Added EnumItem AudioFilterType.Highpass48dB : 8
	Added EnumItem AudioFilterType.Bandpass : 9
	Added EnumItem AudioFilterType.Notch : 10

Changed the value of EnumItem PreferredTextSize.Medium from 0 to 1
Changed the value of EnumItem PreferredTextSize.Large from 4 to 2
Changed the value of EnumItem PreferredTextSize.Larger from 9 to 3
Changed the value of EnumItem PreferredTextSize.Largest from 14 to 4
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#633) for a syntax highlighted version!)