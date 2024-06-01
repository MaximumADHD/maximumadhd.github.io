## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/7b7f29a9e2fec8dbed2b76fc8741e1d98ef36e5e

## API Changes

```plain
Added Class AnnotationsService : Instance [NotCreatable] [Service]

Added Property HumanoidDescription.ResetIncludesBodyParts: boolean {RobloxScriptSecurity} [Hidden]
Added Property RootImportData.KeepZeroInfluenceBones: boolean
Added Property TriangleMeshPart.UnscaledCofm: Vector3 {RobloxSecurity}
Added Property TriangleMeshPart.UnscaledVolInertiaDiags: Vector3 {RobloxSecurity}
Added Property TriangleMeshPart.UnscaledVolInertiaOffDiags: Vector3 {RobloxSecurity}
Added Property TriangleMeshPart.UnscaledVolume: number {RobloxSecurity}

Added Function AdGui:HandleLuaUIEvent(eventType: Enum.AdUIEventType) -> () {RobloxScriptSecurity}
Added Function AdService:SetAdGuiInteractivityHandlerInitialized() -> () {RobloxScriptSecurity}
Added Function AvatarCreationService:ValidateUGCAccessoryAsync(player: Player, accessory: Instance, accessoryType: Enum.AccessoryType) -> ...any [Yields]
Added Function AvatarCreationService:ValidateUGCBodyPartAsync(player: Player, instance: Instance, bodyPart: Enum.BodyPart) -> ...any [Yields]
Added Function AvatarCreationService:ValidateUGCFullBodyAsync(player: Player, humanoidDescription: HumanoidDescription) -> ...any [Yields]
Added Function AvatarGenerationJob:GetOutput() -> { [string]: any }

Added Event AdGui.adGuiStateChanged(adUIState: any) {RobloxScriptSecurity}
Added Event AdService.adGuiRegisterUI(adGui: Instance) {RobloxScriptSecurity}

Added Enum AdUIEventType
	Added EnumItem AdUIEventType.AdLabelClicked : 0
	Added EnumItem AdUIEventType.VolumeButtonClicked : 1
	Added EnumItem AdUIEventType.FullscreenButtonClicked : 2
	Added EnumItem AdUIEventType.PlayButtonClicked : 3
	Added EnumItem AdUIEventType.PauseButtonClicked : 4
	Added EnumItem AdUIEventType.CloseButtonClicked : 5

Added Enum AdUIType
	Added EnumItem AdUIType.None : 0
	Added EnumItem AdUIType.Image : 1
	Added EnumItem AdUIType.Video : 2

Added EnumItem AvatarGenerationError.Offensive : 4

Changed the return-type of Function MaterialGenerationService:GenerateMaterialVariantsAsync 
	from: { Instance }
	  to: { [string]: any }

Changed the parameters of Event StreamingService.Stream 
	from: (requestId: string, streamContent: string)
	  to: (requestId: string, commandName: string, streamContent: string)

Changed the value of EnumItem AvatarGenerationError.Unknown from 4 to 5

Removed Property LuaSourceContainer.SyncingEditorText
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#627) for a syntax highlighted version!)