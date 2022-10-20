## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/c3310782fd219d1f7ce60960371cf68579adbee9

## API Changes

```plain
Added Class AssetPatchSettings : Instance [NotCreatable] [NotReplicated]
	Added Property string AssetPatchSettings.ContentId
	Added Property string AssetPatchSettings.OutputPath
	Added Property string AssetPatchSettings.PatchId

Added Class FacialAnimationStreamingServiceV2 : Instance [NotCreatable] [Service]
	Added Property int FacialAnimationStreamingServiceV2.ServiceState {RobloxScriptSecurity} [Hidden]
	Added Function bool FacialAnimationStreamingServiceV2:IsAudioEnabled(int mask) {RobloxScriptSecurity}
	Added Function bool FacialAnimationStreamingServiceV2:IsPlaceEnabled(int mask) {RobloxScriptSecurity}
	Added Function bool FacialAnimationStreamingServiceV2:IsServerEnabled(int mask) {RobloxScriptSecurity}
	Added Function bool FacialAnimationStreamingServiceV2:IsVideoEnabled(int mask) {RobloxScriptSecurity}
	Added Function int FacialAnimationStreamingServiceV2:ResolveStateForUser(int64 userId) {RobloxScriptSecurity} [Yields]

Added Class ScriptBuilder : Instance [NotCreatable] [NotReplicated]

Added Class AnimationConstraint : Constraint [NotBrowsable]
	Added Property float AnimationConstraint.MaxForce
	Added Property float AnimationConstraint.MaxTorque
	Added Property CFrame AnimationConstraint.Transform

Added Class CoreScriptBuilder : ScriptBuilder [NotCreatable] [NotReplicated]

Added Property string AssetDeliveryProxy.Interface
Added Property int AssetDeliveryProxy.Port
Added Property bool AssetDeliveryProxy.StartServer
Added Property bool ScreenGui.ClipToDeviceSafeArea [NotBrowsable]
Added Property Enum.SafeAreaCompatibility ScreenGui.SafeAreaCompatibility [NotBrowsable]
Added Property bool Sound.PlaybackRegionsEnabled [NotBrowsable]
Added Property NumberRange Sound.LoopRegion
Added Property NumberRange Sound.PlaybackRegion
Added Property Enum.HumanoidStateMachineMode StarterPlayer.HumanoidStateMachineMode [NotBrowsable]

Added Function void DebuggerConnection:UpdateSelectedFrame(int threadId, int frameNumber) {RobloxScriptSecurity}
Added Function void FaceAnimatorService:Init(bool videoEnabled, bool audioEnabled) {RobloxScriptSecurity}
Added Function void Terrain:HideTerrainRegion() {RobloxScriptSecurity}
Added Function void Terrain:SetTerrainRegion(CFrame cframe, Vector3 size) {RobloxScriptSecurity}
Added Function void Terrain:SetWireframeRegion(CFrame cframe, Vector3 size) {RobloxScriptSecurity}
Added Function void Terrain:ShowTerrainRegion() {RobloxScriptSecurity}

Added Callback Tuple TextChannel.ShouldDeliverCallback(TextChatMessage message, TextSource textSource)

Added Enum FacialAnimationStreamingState
	Added EnumItem FacialAnimationStreamingState.None : 0
	Added EnumItem FacialAnimationStreamingState.Audio : 1
	Added EnumItem FacialAnimationStreamingState.Video : 2
	Added EnumItem FacialAnimationStreamingState.Place : 4
	Added EnumItem FacialAnimationStreamingState.Server : 8

Added Enum HumanoidStateMachineMode
	Added EnumItem HumanoidStateMachineMode.Default : 0
	Added EnumItem HumanoidStateMachineMode.Legacy : 1
	Added EnumItem HumanoidStateMachineMode.NoStateMachine : 2
	Added EnumItem HumanoidStateMachineMode.LuaStateMachine : 3

Added Enum SafeAreaCompatibility
	Added EnumItem SafeAreaCompatibility.None : 0
	Added EnumItem SafeAreaCompatibility.FullscreenExtension : 1

Added EnumItem ConnectionError.PlacelaunchUserPrivacyUnauthorized : 533
Added EnumItem ParticleFlipbookLayout.Grid2x2 : 1
Added EnumItem ParticleFlipbookLayout.Grid4x4 : 2
Added EnumItem ParticleFlipbookLayout.Grid8x8 : 3

Added Tag [Deprecated] to Class AnalyticsService
	Added Tag [Deprecated] to Function AnalyticsService:FireCustomEvent
	Added Tag [Deprecated] to Function AnalyticsService:FireInGameEconomyEvent
	Added Tag [Deprecated] to Function AnalyticsService:FireLogEvent
	Added Tag [Deprecated] to Function AnalyticsService:FirePlayerProgressionEvent

Added Tag [Hidden] to Property TextBox.Font
Added Tag [Hidden] to Property TextButton.Font
Added Tag [Hidden] to Property TextLabel.Font

Changed the memory category of Class AdGui 
	from: "Instances"
	  to: "Internal"

Changed the parameters of Function ContextActionService:BindActivate 
	from: (Enum.UserInputType userInputTypeForActivation, Enum.KeyCode keyCodeForActivation = "Unknown")
	  to: (Enum.UserInputType userInputTypeForActivation, Tuple keyCodesForActivation)

Changed the parameters of Function SocialService:CanSendGameInviteAsync 
	from: (Instance player)
	  to: (Instance player, int64 recipientId = 0)

Removed Class PatchMapping
	Removed Property PatchMapping.FlattenTree
	Removed Property PatchMapping.PatchId
	Removed Property PatchMapping.TargetPath

Removed Function AssetImportSession:GetCurrentImportMap

Removed EnumItem ParticleFlipbookLayout.TwoByTwo
Removed EnumItem ParticleFlipbookLayout.FourByFour
Removed EnumItem ParticleFlipbookLayout.EightByEight
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#549) for a syntax highlighted version!)