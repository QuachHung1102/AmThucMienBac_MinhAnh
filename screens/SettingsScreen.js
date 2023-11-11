import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, Pressable, Modal, FlatList, ImageBackground, Dimensions, TextInput, KeyboardAvoidingView } from "react-native";
import SvgImg from "../assets/svg/SvgImage";
import SvgChevronUpAndDown from "../assets/svg/SvgChevronUpAndDown";
import Collapsible from "react-native-collapsible";
import DiscoverImages from "../assets/imagesFuntions/DiscoverImage";

function LanguageItem({ item, setActiveLanguage, activeLanguage, toggleModal }) {
    return (
        <Pressable
            onPress={() => { setActiveLanguage(item.id); toggleModal() }}
        >
            <View style={[styles.languageTextView, activeLanguage == item.id ? styles.languageTextViewActive : styles.languageTextViewUnActive]}>
                <Text style={[styles.languageText, activeLanguage == item.id ? styles.textActive : styles.textUnActive]}>{item.name}</Text>
            </View>
        </Pressable>
    )
}

function SettingsScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState); // Đảo giá trị của state.
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(previousState => !previousState);
    };
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(previousState => !previousState);
    const [modalVisibleHelp, setModalVisibleHelp] = useState(false);
    const toggleModalHelp = () => setModalVisibleHelp(previousState => !previousState);
    const [activeLanguage, setActiveLanguage] = useState(1);
    const listLanguege = [
        { id: '1', name: 'English' },
        { id: '2', name: 'Vietnamese' },
        { id: '3', name: 'Bungary' },
        { id: '4', name: 'Japanese' },
        { id: '5', name: 'Korean' },
        { id: '6', name: 'ThaiLand' },
        { id: '7', name: 'Franche' },
    ];


    function renderLeaguage({ item }) {
        return (
            <LanguageItem item={item} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} toggleModal={toggleModal} />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.settingItems}>
                    <View style={styles.flexRow}>
                        <Text style={styles.text}>Ngôn ngữ</Text>
                        <Pressable
                            onPress={toggleModal}
                        >
                            <Text style={styles.textLanguege}>{listLanguege[`${activeLanguage - 1}`].name}</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.settingItems} >
                    <View style={styles.flexRow}>
                        <Text style={styles.text}>Thông báo</Text>
                        <Switch
                            trackColor={{ false: "#B5B5B5", true: "#634800" }}
                            thumbColor={isEnabled ? "#634800" : "#B5B5B5"}
                            ios_backgroundColor={"#FFF3D3"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.settingItems} >
                    <View style={styles.flexRow}>
                        <Text style={styles.text}>Thời gian sử dụng</Text>
                        <Pressable
                            onPress={toggleCollapse}
                        >
                            <View style={styles.flexRow}>
                                <SvgChevronUpAndDown state={isCollapsed} height={24} width={24} />
                                <SvgImg xml={`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 10V15L17.5 17.5M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" stroke="#634800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`} />
                            </View>
                        </Pressable>
                    </View>
                    <Collapsible collapsed={isCollapsed} style={styles.timeContent}>
                        <Text style={styles.dateText}>Hôm nay, 15 tháng 9</Text>
                        <Text style={styles.timeText}>1g 53ph</Text>
                    </Collapsible>
                </View>
                <View style={styles.settingItems} >
                    <Pressable onPress={toggleModalHelp}>
                        <Text style={styles.text}>Trợ giúp</Text>
                    </Pressable>
                </View>
                <View style={styles.settingItems} >
                    <Text style={styles.text}>Bình luận</Text>
                </View>
                <View style={styles.settingItems} >
                    <Text style={styles.text}>Đăng xuất</Text>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <KeyboardAvoidingView behavior="height" style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <FlatList
                                data={listLanguege}
                                renderItem={renderLeaguage}
                                keyExtractor={(item, index) => item.id}
                                ItemSeparatorComponent={
                                    <View style={{ height: 15 }}></View>
                                }
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleHelp}
                onRequestClose={() => {
                    setModalVisibleHelp(!modalVisibleHelp);
                }}>
                <KeyboardAvoidingView behavior="height" style={styles.centeredView}>
                    <View style={styles.modalHelpView}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <View style={styles.modalHelpHeader}></View>
                            <View style={styles.modalHelpMessage}>
                                <ImageBackground
                                    source={require('../assets/images/chatHelpBackgroup.png')} //chatHelpBackgroup.png
                                    resizeMode="contain"
                                    imageStyle={styles.backgroundImage}
                                    style={{ flex: 1 }}
                                >
                                    <View style={{ flex: 1, }}>
                                        <Text>This is a Message</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={[styles.modalHelpFooter, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }]}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Your message!"
                                    // onChangeText={messageInputHandler}
                                    defaultValue={"Bạn cần giúp gì?"}
                                    // value={messageInputHandler}
                                    textAlign="center"
                                    underlineColorAndroid='transparent'
                                >
                                </TextInput>
                                <SvgImg xml={`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
  <path d="M26.1704 16.841C26.4192 16.7163 26.6284 16.5249 26.7746 16.288C26.9209 16.0512 26.9983 15.7784 26.9983 15.5C26.9983 15.2217 26.9209 14.9489 26.7746 14.7121C26.6284 14.4752 26.4192 14.2838 26.1704 14.159L5.17039 3.65904C4.91001 3.52876 4.61734 3.47707 4.32808 3.51028C4.03882 3.54349 3.76548 3.66017 3.54141 3.84608C3.31733 4.03199 3.1522 4.27909 3.06617 4.55725C2.98013 4.8354 2.97691 5.13259 3.05689 5.41254L5.20039 12.9125C5.29005 13.226 5.4794 13.5017 5.73977 13.6979C6.00014 13.8942 6.31736 14.0002 6.64339 14L13.4999 14C13.8977 14 14.2792 14.1581 14.5606 14.4394C14.8419 14.7207 14.9999 15.1022 14.9999 15.5C14.9999 15.8979 14.8419 16.2794 14.5606 16.5607C14.2792 16.842 13.8977 17 13.4999 17H6.64339C6.31736 16.9999 6.00014 17.1059 5.73977 17.3021C5.4794 17.4984 5.29005 17.7741 5.20039 18.0875L3.05839 25.5875C2.97825 25.8674 2.98128 26.1646 3.06711 26.4427C3.15294 26.7209 3.31787 26.9681 3.54177 27.1541C3.76567 27.3402 4.03888 27.4571 4.32806 27.4905C4.61725 27.524 4.90993 27.4726 5.17039 27.3425L26.1704 16.8425V16.841Z" fill="#FFF3D3"/>
</svg>`} />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal >
        </View >
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rootScreen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF3D3",
        alignItems: 'center',
    },
    content: {
        width: "90%",
        marginTop: 20,
    },
    text: {
        color: "#634800",
        fontSize: 14,
        fontWeight: '600',
        fontFamily: "Montserrat_600SemiBold",
        paddingHorizontal: 10,
        paddingVertical: 10,
        letterSpacing: 0.3,
    },
    settingItems: {
        borderTopWidth: 2,
        borderColor: '#B5B5B5',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    textLanguege: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#634800",
        color: "#FFF3D3",
        fontFamily: "Montserrat_400Regular",
        fontSize: 10,
        fontWeight: '400',
        borderRadius: 7,
    },
    timeContent: {
        paddingHorizontal: 25,
    },
    dateText: {
        color: "#634800",
        fontFamily: "Montserrat_600SemiBold",
        fontWeight: '600',
        fontSize: 12,
    },
    timeText: {
        color: "#634800",
        fontFamily: "SignikaNegative_700Bold",
        fontWeight: '700',
        fontSize: 20,
        padding: 10,
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        width: '90%',
        height: '50%',
        margin: 20,
        backgroundColor: '#FFF3D3',
        borderRadius: 20,
        padding: 25,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHelpView: {
        width: '90%',
        height: '80%',
        margin: 20,
        backgroundColor: '#FFF3D3',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHelpHeader: {
        width: '100%',
        height: '10%',
        backgroundColor: "#634800",
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    modalHelpMessage: {
        width: '100%',
        height: '80%',
        marginHorizontal: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    modalHelpFooter: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        paddingHorizontal: Dimensions.get('screen').width * 0.05,
        backgroundColor: "#634800",
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
    },
    languageTextView: {
        borderRadius: 10,
    },
    languageTextViewUnActive: {
        backgroundColor: '#FFE9AF',
    },
    languageTextViewActive: {
        backgroundColor: "#634800",
    },
    languageText: {
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    textActive: {
        color: "#FFF3D3",
    },
    textUnActive: {
        color: "#383838",
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        // transform: [{ translateX: Dimensions.get('screen').width * 0.15 }, { translateY: Dimensions.get('screen').height * 0.15 }]
    },
    textInput: {
        backgroundColor: "#FFF3D3",
        borderRadius: 10,
        width: '85%',
    }
});